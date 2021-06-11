from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL
from . import config

connection_url = URL(
    config.db.driver,
    username=config.db.username,
    password=config.db.password,
    host=config.db.host,
    port=config.db.port,
    database=config.db.name,
    query=config.db.query
)

engine = create_engine(connection_url)
Base = declarative_base()
SessionLocal = sessionmaker()
SessionLocal.configure(bind=engine)

def init():
    Base.metadata.create_all(bind=engine)
