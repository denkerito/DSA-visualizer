import type { ReactNode } from "react";
import { Zap } from 'lucide-react';

interface DsaWindowCardProps{
    children: ReactNode;
    chosen : boolean;
    onStart: () => void
}

function DsaWindowCard({children, chosen = false, onStart}: DsaWindowCardProps){
    /*
    const runVisualization = (chosenAlgo: string) => {
        super.runVisualization();
    } */

    return (
        <div className="w-[69rem] h-[30rem] bg-black/70 backdrop-blur-md backdrop-brightness-110 rounded-[1.5rem] shadow-2xl flex flex-col items-center justify-between p-6">
            <div></div>

            <div className="flex-1 flex items-center justify-center">
                {children}
            </div>
            
            <button 
                className={`group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                    chosen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick = {onStart}
                
            >
                <div className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Run Visualization
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>
    );
}

export default DsaWindowCard;