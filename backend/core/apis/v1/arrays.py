from core.schemas.input_model import ArrayBaseOperationInputModel, ArraySortingInputModel
from core.schemas.output_model import AlgorithmsOutputModel, ArrayOutputModel, BubbleSortStepOutputModel, SelectionSortStepOutputModel, \
      TypeOfOperation, InsertionSortStepOutputModel
from fastapi import APIRouter, HTTPException
from fastapi import status
import numpy as np

import logging

# Basic logging config
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)

DATA_TAGS = ["Arrays"]
DATA_URL = "arrays"

router = APIRouter(prefix="/" + DATA_URL, tags=DATA_TAGS)

array = list(np.random.randint(100, size=5))

# Getter
@router.get("/get_all_algorithms", response_model=AlgorithmsOutputModel)
async def get_all_algorithms():
    logger.info("GET /get_all_algorithms called")
    return AlgorithmsOutputModel(algorithms=["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"])

@router.get("/get_array",response_model=ArrayOutputModel)
async def get_array():
    return ArrayOutputModel(array=array)

@router.post("/add_element", response_model=ArrayOutputModel)
async def add_element(field: ArrayBaseOperationInputModel):
    if field.element is None:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="The element passed can't be null")
    array.append(field.element)
    return ArrayOutputModel(array=array)

@router.post("/remove_element", response_model=ArrayOutputModel)
async def remove_element(field: ArrayBaseOperationInputModel):
    if field.element is None or field.element not in array:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="The operation cannot be completed")
    array.remove(field.element)
    return ArrayOutputModel(array=array)

# Algorithms
@router.get("/insertion_sort")
async def insertion_sort(field: ArraySortingInputModel):
    array_copy= array.copy()
    if not array_copy:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="The array passed can't be null")
    steps= []
    n=len(array_copy)
    for i in range(1, len(array_copy)):
        key = array_copy[i]
        j = i - 1
        steps.append(InsertionSortStepOutputModel(
            current_array=array_copy,
            current_index=i, #key index
            type_of_operation=TypeOfOperation.COMPARISON,
            ordered_index=i-1,
            swap_index=-1  # No swap yet, so we set it to -1 initially
        ))
        while j >= 0 and key < array_copy[j]:
            array_copy[j + 1] = array_copy[j]
            j -= 1
        array_copy[j + 1] = key
        steps.append(InsertionSortStepOutputModel(
            current_array=array_copy,
            current_index=i, #key index
            type_of_operation=TypeOfOperation.SWAP,
            ordered_index=i-1,
            swap_index=j+1
        ))
    return steps
    

@router.get("/selection_sort")
async def selection_sort():
    
    if not array:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="The array passed can't be null")
    steps= []
    array_copy= array.copy()
    n=len(array_copy)
    for i in range(n):
        min_idx = i
        
        for j in range(i + 1, n):
            
            steps.append(SelectionSortStepOutputModel(
                current_array= array_copy,
                min_index=min_idx,
                current_index=j,
                type_of_operation =TypeOfOperation.COMPARISON,
                ordered_index=i
            ))
            if array_copy[j] < array_copy[min_idx]:
                min_idx = j
                steps.append(SelectionSortStepOutputModel(
                    current_array= array_copy,
                    min_index=min_idx,
                    current_index=j,
                    type_of_operation =TypeOfOperation.SUCCESS_COMPARISON,
                    ordered_index=i
                ))
        
        array_copy[i], array_copy[min_idx] = array_copy[min_idx], array_copy[i]
        steps.append(
            SelectionSortStepOutputModel(
                current_array= array_copy,
                min_index=min_idx,
                current_index=j,
                type_of_operation =TypeOfOperation.SWAP,
                ordered_index=i
        ))
    return steps

@router.get("/bubble_sort")
async def bubble_sort():
    if not array:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="The array passed can't be null")
    steps= []
    array_copy= array.copy()
    n = len(array_copy)
    for i in range(n):
        for j in range(0, n-i-1):
            steps.append(BubbleSortStepOutputModel(
                current_array= array_copy,
                next_index = j + 1,  # fix_value in this context is the next index to compare (maybe we can change this later or use a different model)
                current_index=j,
                type_of_operation =TypeOfOperation.COMPARISON,
                ordered_index= n - i
            ))
            if array_copy[j] > array_copy[j+1]:
                steps.append(BubbleSortStepOutputModel(
                    current_array= array_copy,
                    next_index = j + 1,
                    current_index=j,
                    type_of_operation =TypeOfOperation.SUCCESS_COMPARISON,
                    ordered_index= n - i
                ))
                array_copy[j], array_copy[j+1] = array_copy[j+1], array_copy[j]
                steps.append(BubbleSortStepOutputModel(
                    current_array= array_copy,
                    next_index = j + 1,
                    current_index = j,
                    type_of_operation = TypeOfOperation.SWAP,
                    ordered_index= n - i
                ))
            else:
                steps.append(BubbleSortStepOutputModel(
                    current_array= array_copy,
                    next_index = j + 1,
                    current_index=j,
                    type_of_operation =TypeOfOperation.FAILURE_COMPARISON,
                    ordered_index= n - i
                ))
    # We can possibly add a final step to indicate the array is sorted TypeOfOperation.sorted, or just manage it in the frontendz
    return steps        
        

@router.get("/merge_sort")
async def merge_sort():
    ...

@router.get("/quick_sort")
async def quick_sort():
    ...

