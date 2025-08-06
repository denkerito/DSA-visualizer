type TypeOfOperation = "comparison" | "successComparison" | "failureComparison" | "swap";

export const TypeOfOperationEnum = {
  COMPARISON: "comparison",
  SUCCESS_COMPARISON: "successComparison",
  FAILURE_COMPARISON: "failureComparison",
  SWAP: "swap"
} as const;
    

export interface Step{
  current_array: number[];
  current_index: number;
  type_of_operation: TypeOfOperation
}

export interface SelectionSortStep extends Step{
  min_index: number;
  ordered_index: number;
}

export interface BubbleSortStep extends Step{
  next_index: number;
  ordered_index: number;
}