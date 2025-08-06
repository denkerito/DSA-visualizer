import LiOperation from "../list_element/LiOperation";

interface OperationCardProps{
    operations: string[];
}


function OperationCard({operations}:OperationCardProps){
    return (
        <div className="w-[26rem] h-fit bg-black/70 backdrop-blur-md backdrop-brightness-110  rounded-[1.5rem] shadow-2xl">
            <div className ="w-full justify-center flex flex-col items-center h-[4rem] border-b border-gray-500">
                <h1 className="text-white "> Choose your operation</h1>
            </div>
            <ul className="list-image-none">
                <LiOperation value={operations[0]} />
            </ul>  
        </div>
    )
}

export default OperationCard;