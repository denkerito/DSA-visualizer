import LiOperation from "../list_element/LiOperation";
import { Settings } from 'lucide-react';

interface OperationCardProps{
    operations: string[];
}


function OperationCard({operations}:OperationCardProps){
    return (
        <div className="w-[23.5rem] h-fit rounded-[1.1rem] bg-[#242832]"
            style={{
                backgroundImage: "linear-gradient(139deg, #242832 0%, #241c28 100%)"
            }}
        >
            <div className ="w-full justify-center flex flex-row items-center h-[4rem] border-b border-[#42434a] space-x-[1rem]">
                <Settings />
                <h1 className="text-[#FEFBF6] text-[1.2rem] font-bold">OPERATIONS LIST</h1>
            </div>
            <div className="w-full h-[85%] p-[2%]">
            <ul className="list-image-none flex space-y-2 flex-col text-[1.08rem] font-medium font-roboto">
                <LiOperation value={operations[0]} />
                <LiOperation value={"remove"} />
            </ul>  
            </div>
        </div>
    )
}

export default OperationCard;