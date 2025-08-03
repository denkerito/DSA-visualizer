import DsaWindowCard from "../card/DsaWindowCard";
import AlgoChoser from "../card/AlgoChoser";
import { Square } from "lucide-react";
import useApiCall from "../../logic_application/ApiCall";

interface AlgorithmsData {
  algorithms: string[];
}

interface ApiResponse {
  data: AlgorithmsData | null;
  error: string | null;
  loading: boolean;
}

function ArrayPage() {
  const algorithms = useApiCall({
        endpoint: 'arrays/get_all_algorithms',
        method: 'GET'
  }) as ApiResponse;

  console.log('Hook result:', algorithms); // DEBUG

  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <div className="p-10 h-screen flex flex-row space-x-12">
        <DsaWindowCard>
          <Square />
        </DsaWindowCard>
        <AlgoChoser algorithms= {!algorithms.error && algorithms.data ? algorithms.data?.algorithms: [] }/>
      </div>
    </div>
  );
  
}

export default ArrayPage;