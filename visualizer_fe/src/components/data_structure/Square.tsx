import type { Step, SelectionSortStep } from "../../logic_application/ApiResponseSchema";

interface SquareProps{
    value:number;
    index:number;
    step:Step | null
}

function Square({value,index, step}: SquareProps) {
  const isSelectionSortStep = (step: Step): step is SelectionSortStep => {
    return 'min_index' in step && 'ordered_index' in step;
  }

  const color = () =>{
    if(step){
      if(isSelectionSortStep(step)){
        if(index===step.min_index){
          return "border-red border";
        }
        if(index===step.current_index){
          return "border-green border";
        }
        if(index===step.ordered_index){
          return "border-blue border";
        }
      }
    }
    else{
      return "border-white border";
    }  
  }

  return (
    <div className={`flex items-center justify-center text-white font-bold ${color()}
                   h-24 w-24`}>
        <p>{value}</p>
    </div>
  )
}

export default Square