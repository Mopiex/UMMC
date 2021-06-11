from fastapi import Security, FastAPI, Depends, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi.security.api_key import APIKey, APIKeyHeader
from starlette import status
from sqlalchemy.orm import Session
from jose import jwt, JWTError
from typing import List
from . import database, crud, schemas, config, auth
from .from_excel import from_excel
from .exceptions import AuthenticationException
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = APIKeyHeader(name='X-API-Key', auto_error=False)
database.init()


def row_to_dict(r): return {c.name: str(getattr(r, c.name))
                            for c in r.__table__.columns}


def get_db():
    session = database.SessionLocal()
    try:
        yield session
    finally:
        session.close()


async def get_current_user(db: Session = Depends(get_db), token: str = Depends(api_key)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail='Could not validate credentials'
    )

    if not token:
        raise credentials_exception

    try:
        payload = jwt.decode(token, config.jwt.secret_key,
                             algorithms=[config.jwt.algorithm])
        username: str = payload.get('sub')
        if username is None:
            raise credentials_exception
        token_data = schemas.TokenData(username=username)
    except JWTError as e:
        raise credentials_exception

    user = crud.get_user(db, username)
    if user is None:
        raise credentials_exception

    return schemas.User(**row_to_dict(user))


@app.post('/login')
async def login(user: schemas.UserWithPassword, db: Session = Depends(get_db)):
    try:
        user = crud.authenticate_user(db, user)
    except AuthenticationException:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password'
        )

    access_token = auth.create_access_token(data={'sub': user.username})
    return JSONResponse(content={'access_token': access_token, 'username': user.username})


@app.post('/signup')
async def signup(user: schemas.UserWithPassword, db: Session = Depends(get_db)):
    new_user = crud.create_user(db, user)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='A user with that username already exists'
        )


@app.post('/dashboard')
async def upload_dashboard(
    user: schemas.User = Depends(get_current_user),
    sheet_file: UploadFile = File(
        'sheet_file', media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
):
    from_excel(user, sheet_file.file)


@app.get('/dashboard', response_model=List[schemas.DashboardEntry])
async def get_dashboard(user: schemas.User = Depends(get_current_user), db: Session = Depends(get_db)):
    data = list(map(lambda x: schemas.DashboardEntry(**row_to_dict(x)), crud.get_dashboard(db, user)))
    return data
