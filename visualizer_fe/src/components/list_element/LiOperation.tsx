import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LiOperationProps {
  value: string;
}

function LiOperation({ value }: LiOperationProps) {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleExpand = () => setExpanded(!expanded);

  const handleAdd = () => {
    console.log(`Added: ${inputValue}`);
    setInputValue("");
  };

  return (
    <li className="w-full border border-gray-600 rounded-lg p-4 mb-2 bg-[#242832] text-white">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <span className="text-lg font-semibold">{value}</span>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {expanded && (
        <div className="mt-4 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      )}
    </li>
  );
}

export default LiOperation;
