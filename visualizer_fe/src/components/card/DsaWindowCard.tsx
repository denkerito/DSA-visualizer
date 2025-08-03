import type { ReactNode } from "react";

interface DsaWindowCardProps{
    children: ReactNode;
}

function DsaWindowCard({children}: DsaWindowCardProps){
    return (
        <div className="w-[69rem] h-[30rem] bg-black/70 backdrop-blur-md backdrop-brightness-110  rounded-[1.5rem] shadow-2xl">
            {children}
        </div>
    );
}

export default DsaWindowCard;