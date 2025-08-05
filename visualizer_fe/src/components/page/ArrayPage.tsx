import DsaWindowCard from "../card/DsaWindowCard";
import AlgoChoser from "../card/AlgoChoser";
import Square  from "../data_structure/Square";
import useApiCall from "../../logic_application/ApiCall";
import { useState } from "react";

import type { ApiResponse,AlgorithmsData, ArrayData, Step, SelectionSortStep }  from "../../logic_application/ApiResponseSchema"

function ArrayPage() {
  const algorithms = useApiCall({
        endpoint: 'arrays/get_all_algorithms',
        method: 'GET'
  }) as ApiResponse<AlgorithmsData>;

  const array = useApiCall({
        endpoint: 'arrays/get_array',
        method: 'GET'
  }) as ApiResponse<ArrayData>;
  
  const [chooseAlgo, setChooseAlgo] = useState('');
  const [steps, setSteps] = useState<Step[]>([]) 
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)


  const startVisualization = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/arrays/${chooseAlgo}`)
      const response = await res.json()
      
      setSteps(response as SelectionSortStep[])
      console.log(steps.length)

      setIsPlaying(true)
      let i = 0

      const interval = setInterval(() => {
        if (i >= response.length) {
          clearInterval(interval)
          setIsPlaying(false)
          return
        }
        setCurrentStepIndex(i)
        i++
      }, 500)
    } catch (err) {
      console.error('Errore durante la visualizzazione:', err)
    }
  }
  
  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <div className="p-10 h-screen flex flex-row space-x-12">
        <DsaWindowCard chosen = {chooseAlgo ? true : false} onStart={startVisualization}>
          <div className="w-full h-full flex flex-row items-center justify-center">
            {(array.data as ArrayData)?.array.map((value, index) => (
              <Square 
                key = {index}
                index={index}
                value = {value}
                step={steps.length===0 || currentStepIndex >= steps.length ? null : steps[currentStepIndex]}
              />
            ))}
          </div>  
        </DsaWindowCard>
        <AlgoChoser  algorithms= {!algorithms.error && algorithms.data ? (algorithms.data as AlgorithmsData).algorithms : [] } 
          setChooseAlgo={setChooseAlgo}/>
      </div>
    </div>
  );
  
}

export default ArrayPage;
