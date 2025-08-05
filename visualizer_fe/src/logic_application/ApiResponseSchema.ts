export interface AlgorithmsData {
  algorithms: string[];
}  

export interface ArrayData {
  array: number[];
}

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

type TypeOfOperation = "comparison" | "successComparison" | "swap";
    

export interface Step{
  current_array: number[];
  current_index: number;
  type_of_operation: TypeOfOperation
}

export interface SelectionSortStep extends Step{
  min_index: number;
  ordered_index: number;
}