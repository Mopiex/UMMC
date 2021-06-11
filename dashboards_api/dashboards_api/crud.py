from . import models, schemas, auth
from .exceptions import AuthenticationException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError


def create_user(db: Session, user: schemas.UserWithPassword):
    hashed_password = auth.get_password_hash(user.password)
    new_user = models.User(username=user.username, password=hashed_password)
    db.add(new_user)
    
    try:
        db.commit()
    except IntegrityError: # user already exists
        db.rollback()
        return None
    
    return new_user

def get_user(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def authenticate_user(db: Session, user: schemas.UserWithPassword):
    found_user = get_user(db, user.username)
    if not found_user:
        raise AuthenticationException('User was not found')
    if not auth.verify_password(user.password, found_user.password):
        raise AuthenticationException('Incorrect password')
    return found_user

def create_dashboard_entry(db: Session, user: schemas.User, entry: schemas.DashboardEntry):
    new_entry = models.DashboardEntry(**entry.dict())
    db_user = get_user(db, user.username)
    db_user.dashboard_entries.append(new_entry)
    db.add(new_entry)
    db.commit()
    return new_entry

def clear_dashboard(db: Session, user: schemas.User):
    db_user = get_user(db, user.username)

    for entry in db_user.dashboard_entries:
        db.delete(entry)
    
    db.commit()

def get_dashboard(db: Session, user: schemas.User):
    user_db = get_user(db, user.username)
    return user_db.dashboard_entries
