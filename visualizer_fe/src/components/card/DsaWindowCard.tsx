import type { ReactNode } from "react";
import { Zap } from 'lucide-react';

interface DsaWindowCardProps{
    children: ReactNode;
    chosen : boolean;
    onStart: () => void
}

function DsaWindowCard({children, chosen = false, onStart}: DsaWindowCardProps){
    return(
    <div
            className="
                w-[69rem] h-[30rem] 
                rounded-[16px] 
                shadow-[0_4px_30px_rgba(0,0,0,0.2)]
                backdrop-blur-[20px]
                supports-[backdrop-filter]:backdrop-blur-[20px]
                flex flex-col justify-between p-6 overflow-hidden
                relative
            "
            style={{
                background: "rgba(26, 28, 35, 0.15)", // Aumentata opacità per visibilità
                border: "1px solid rgba(255, 255, 255, 0.1)", // Bordo più visibile
            }}
        >
            {/* Subtle inner highlight per più definizione */}
            <div 
                className="absolute inset-[1px] rounded-[15px] pointer-events-none bg-[#ffffff08]"
            />
            
            {/* Content container */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                {children}
            </div>

            <button
                className={`group relative z-10 mt-6 px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                chosen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={onStart}
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