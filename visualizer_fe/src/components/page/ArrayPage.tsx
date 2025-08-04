import DsaWindowCard from "../card/DsaWindowCard";
import AlgoChoser from "../card/AlgoChoser";
import Square  from "../data_structure/Square";
import useApiCall from "../../logic_application/ApiCall";
import { useState, useEffect } from "react";

interface AlgorithmsData {
  algorithms: string[];
}  

interface ArrayData {
  array: number[];
}

interface ApiResponse {
  data: AlgorithmsData | ArrayData | null;
  error: string | null;
  loading: boolean;
}

function ArrayPage() {
  const algorithms = useApiCall({
        endpoint: 'arrays/get_all_algorithms',
        method: 'GET'
  }) as ApiResponse;

  const array = useApiCall({
        endpoint: 'arrays/get_array',
        method: 'GET'
  }) as ApiResponse;
  
  const [chooseAlgo, setChooseAlgo] = useState('');
  

  const [steps, setSteps] = useState<Step[]>([])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

 

  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <div className="p-10 h-screen flex flex-row space-x-12">
        <DsaWindowCard chosen = {chooseAlgo ? true : false}>
          <div className="w-full h-full flex flex-row items-center justify-center">
            {(array.data as ArrayData)?.array.map((value, index) => (
              <Square 
                key = {index} 
                value = {value}
                color = {}
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
