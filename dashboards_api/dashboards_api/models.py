from .database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    password = Column(String)
    dashboard_entries = relationship('DashboardEntry', back_populates='user')


class DashboardEntry(Base):
    __tablename__ = 'dashboard_entries'

    id = Column(Integer, primary_key=True, index=True)
    id_link = Column(Integer)
    id_firm = Column(Integer)
    name_firm = Column(String)
    sorting = Column(Integer)
    id_group = Column(Integer)
    name_group = Column(String)
    id_group_item = Column(Integer)
    sort = Column(Float)
    name_item = Column(String)
    date_information = Column(DateTime)
    plan_month_new = Column(String)
    plan_day = Column(String)
    fact_day = Column(String)
    calc_procent_day = Column(String)
    plan_month = Column(String)
    fact_month = Column(String)
    calc_procent_month = Column(String)
    balance_eof = Column(String)
    sort_elem = Column(Boolean)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship('User', back_populates='dashboard_entries')
