import DsaWindowCard from "../card/DsaWindowCard";
import AlgoChoser from "../card/AlgoChoser";
import Square  from "../data_structure/Square";
import useApiCall from "../../logic_application/ApiCall";
import { useEffect, useState } from "react";

import type { ApiResponse,AlgorithmsData, ArrayData }  from "../../schemas/ApiResponseSchema"
import type { Step, SelectionSortStep, BubbleSortStep } from "../../schemas/SortingAlgorithmsSchema"
import OperationCard from "../card/OperationCard";

function ArrayPage() {

  const [chooseAlgo, setChooseAlgo] = useState('');
  const [steps, setSteps] = useState<Step[]>([]) 
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [array, setArray] = useState<number[]>([]);

  const algorithms = useApiCall({
        endpoint: 'arrays/get_all_algorithms',
        method: 'GET'
  }) as ApiResponse<AlgorithmsData>;

  
  
  const res= useApiCall({
    endpoint: 'arrays/get_array',
    method: 'GET'
  }) as ApiResponse<ArrayData>;

  
  useEffect(() => {
  if (!isPlaying && !res.error && res.data) {
    setArray((res.data as ArrayData).array);
  }
  }, [isPlaying, res]);

  useEffect(() => {
    if (steps.length > 0 && currentStepIndex < steps.length) {
      const step = steps[currentStepIndex] as SelectionSortStep;
      setArray(step.current_array);
    }
  }, [currentStepIndex, steps]);


  const startVisualization = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/arrays/${chooseAlgo}`)
      const response = await res.json()
      
      if(chooseAlgo === "selection_sort"){
        setSteps(response as SelectionSortStep[])
      }
      if(chooseAlgo === "bubble_sort"){
        setSteps(response as BubbleSortStep[])
      }

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
      }, 1000)
    } catch (err) {
      console.error('Errore durante la visualizzazione:', err)
    }
  }
  
  /*
  possibol color for external div
  - #1e1f24
  - #1a1c23
  - #121318
  - bg-gradient-to-br from-[#1a1c23] to-[#121318]
  - #0f0f11
  - #1a1e26
  - radial-gradient(ellipse at center, #1f232b 0%, #161922 100%)
  - linear-gradient(135deg, #1a1e26 0%, #151821 100%)
  */
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1c23] to-[#121318]">
      <div className="p-10 h-screen flex flex-row space-x-12">
        <DsaWindowCard chosen = {chooseAlgo ? true : false} onStart={startVisualization}>
          <div className="w-full h-full flex flex-row items-center justify-center">
            {array.map((value, index) => (
              <Square 
                key = {index}
                index={index}
                value = {value}
                step={steps.length===0 || currentStepIndex >= steps.length ? null : steps[currentStepIndex]}
              />
            ))}
          </div>  
        </DsaWindowCard>
        <div className="flex flex-col items-center justify-start pt-[2rem] space-y-[4rem] text-[#C8C6C6] transition-all duration-300 ease-out">
          <AlgoChoser  algorithms= {!algorithms.error && algorithms.data ? (algorithms.data as AlgorithmsData).algorithms : [] } 
            setChooseAlgo={setChooseAlgo}/>
          <OperationCard operations={["add"]} />
        </div>
      </div>
    </div>
  );
  
}

export default ArrayPage;
