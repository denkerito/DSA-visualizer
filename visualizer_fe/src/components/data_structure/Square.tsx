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
        if(index<step.ordered_index){
          return "border-2 bg-green-500";
        }
        if(step.ordered_index===step.current_array.length-1){
          return "border-2 bg-green-500";
        }
        if(index===step.min_index){
          return "border-2 bg-red-300";
        }
        if(index===step.current_index){
          return "border-2 bg-yellow-500";
        }
        
      }
    }
    
    return "border-2 border-gray-700 bg-white";
    
  }

  return (
    <div className={`flex items-center justify-center text-white font-bold rounded-[0.3rem] ${color()}
                   h-24 w-24`}>
        <p className="text-gray-700">{value}</p>
    </div>
  )
}

export default Square