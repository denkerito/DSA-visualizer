from typing import List
from pydantic import BaseModel

class ArrayBaseOperationInputModel(BaseModel):
    element: int

class ArraySortingInputModel(BaseModel):
    array: List[int]