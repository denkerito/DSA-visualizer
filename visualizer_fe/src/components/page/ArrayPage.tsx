import DsaWindowCard from "../card/DsaWindowCard";
import AlgoChoser from "../card/AlgoChoser";

function ArrayPage() {
  const algorithms = ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"];
  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <div className="p-10 h-screen flex flex-row space-x-12">
        <DsaWindowCard />
        <AlgoChoser algorithms= {algorithms}/>
      </div>
    </div>
  );
}

export default ArrayPage;