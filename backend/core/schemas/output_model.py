from enum import Enum
from typing import List
from pydantic import BaseModel

class TypeOfOperation(Enum):
    COMPARISON = "comparison"
    SUCCESS_COMPARISON= "successComparison"
    FAILURE_COMPARISON="failureComparison"
    SWAP = "swap"


class AlgorithmsOutputModel(BaseModel):
    algorithms: List[str]

class ArrayOutputModel(BaseModel):
    array: List[int]

class ArraySortingStepBaseOutputModel(BaseModel):
    current_array: List[int]
    current_index: int
    type_of_operation: TypeOfOperation


class SelectionSortStepOutputModel(ArraySortingStepBaseOutputModel):
    min_index: int
    ordered_index: int


class BubbleSortStepOutputModel(ArraySortingStepBaseOutputModel):
    next_index: int
    ordered_index: int

class InsertionSortStepOutputModel(ArraySortingStepBaseOutputModel):
    swap_index: int
    ordered_index: int