import { useState } from "react"



interface AlgoChoserProps {
    algorithms: string[];
}

function AlgoChoser({algorithms = ["no found"]} : AlgoChoserProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div className="w-[26rem] h-fit bg-black/70 backdrop-blur-md backdrop-brightness-110  rounded-[1.5rem] shadow-2xl">
            <div className ="w-full justify-center flex flex-col items-center h-[4rem] border-b border-gray-500">
                <h1 className="text-white "> Choose your algorithms</h1>
            </div>
            <div className="w-full h-[85%] text-white mt-[1.5rem]">
                <ul className="list-image-none flex flex-col items-center justify-center ">
                    {algorithms.map((name, index) =>
                        <li key={name}
                         className={ 
                            selectedIndex === index ? "bg-gray-800" : "bg-black"}
                        
                         onClick={() => setSelectedIndex(index)}> {name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default AlgoChoser;