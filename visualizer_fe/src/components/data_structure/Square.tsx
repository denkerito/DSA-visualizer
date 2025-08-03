interface SquareProps{
    value:number;
    color:string;
}

function Square({value, color = "bg-white-500"}: SquareProps) {
  return (
    <div className={`flex items-center justify-center text-white font-bold cursor-pointer ${color}
                   h-24 w-24`}>
        <p>{value}</p>
    </div>
  )
}

export default Square