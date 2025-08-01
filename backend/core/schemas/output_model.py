from enum import Enum
from typing import List
from pydantic import BaseModel

class TypeOfOperation(Enum):
    COMPARISON = "comparison"
    SUCCESS_COMPARISON= "success_comparison"
    SWAP = "swap"


class AlgorithmsOutputModel(BaseModel):
    algorithms: List[str]

class ArrayOutputModel(BaseModel):
    array: List[int]

class ArraySortingStepOutputModel(BaseModel):
    current_array: List[int]
    min_found: int
    fix_value: int
    current_value: int
    type_of_operation: TypeOfOperation
    ordered_index: int

