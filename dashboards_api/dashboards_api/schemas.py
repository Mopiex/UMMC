from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class User(BaseModel):
    username: str
    
    class Config:
        orm_mode = True


class UserWithPassword(User):
    password: str


class DashboardEntry(BaseModel):
    id_link: Optional[int]
    id_firm: Optional[int]
    name_firm: Optional[str]
    sorting: Optional[int]
    id_group: Optional[int]
    name_group: Optional[str]
    id_group_item: Optional[str]
    sort: Optional[float]
    name_item: Optional[str]
    date_information: Optional[datetime]
    plan_month_new: Optional[str]
    plan_day: Optional[str]
    fact_day: Optional[str]
    calc_procent_day: Optional[str]
    plan_month: Optional[str]
    fact_month: Optional[str]
    calc_procent_month: Optional[str]
    balance_eof: Optional[str]
    sort_elem: Optional[str]


class Token(BaseModel):
    access_token: str


class TokenData(BaseModel):
    username: Optional[str]
