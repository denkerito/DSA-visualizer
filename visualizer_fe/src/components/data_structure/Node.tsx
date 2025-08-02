interface NodeProps{
    value: string;
    x: number;
    y: number;
    isFixed: boolean;
    isCurrent: boolean;
    isMin: boolean;
}

function Node({value, x, y, isFixed = false, isCurrent= false, isMin= false  }: NodeProps){

    const bgColor = isCurrent
            ? "bg-green-500"
            : isMin
            ? "bg-red-500"
            : "bg-blue-500";
  const border = isFixed ? "border-4 border-white": '';
    return (
        <div className={`absolute w-12 h-12 rounded-full 
                      flex items-center justify-center text-white font-bold cursor-pointer
                      ${bgColor} ${border}`}
            style={{ left: x - 24, top: y - 24 }}>
            <p>{value}</p>
        </div>
    )
}

export default Node;