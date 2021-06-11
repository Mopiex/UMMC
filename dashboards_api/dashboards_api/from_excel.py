import re
import pandas as pd
import numpy as np
from fastapi import UploadFile
from typing import IO
from . import crud, models, database, schemas


def _camel_to_snake(s: str):
  s = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', s)
  return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s).lower()

def _remap_keys(d: dict):
    return { _camel_to_snake(key) : value for key, value in d.items() }

def from_excel(user: models.User, sheet_file: IO):
    df = pd.read_excel(sheet_file.read())
    rows = df.replace({np.nan: None}).to_dict('records')
    
    db = database.SessionLocal()
    crud.clear_dashboard(db, user)
    db.close()

    for row in rows:
        db = database.SessionLocal()
        new_entry = schemas.DashboardEntry(**_remap_keys(row))
        new_entry.sort_elem = False if new_entry.sort_elem == 0 else True
        crud.create_dashboard_entry(db, user, new_entry)
        db.close()
