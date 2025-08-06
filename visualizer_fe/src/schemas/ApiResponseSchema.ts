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

