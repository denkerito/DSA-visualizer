import { useState } from "react"



interface AlgoChoserProps {
    algorithms: string[];
    setChooseAlgo: (algo: string) => void
}


function AlgoChoser({algorithms = ["no found"], setChooseAlgo} : AlgoChoserProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const format_algo_name = (name: string ) =>{
        name=name.toLowerCase();
        name=name.replace(" ", "_");
        return name;
    }

    return (
        <div className="w-[26rem] h-fit  rounded-[1.5rem] bg-[#242832]"
        style={{
            backgroundImage: "linear-gradient(139deg, #242832 0%, #241c28 100%)"
        }}
        >
            <div className ="w-full justify-center flex flex-col items-center h-[4rem] border-b border-[#42434a]">
                <h1 className="text-white "> Choose your algorithms</h1>
            </div>
            <div className="w-full h-[85%] text-white mt-[1.5rem]">
                <ul className="list-image-none ">
                    {algorithms.map((name, index) =>
                        <li key={name}
                         className={`${selectedIndex === index && "bg-gray-800"} cursor-pointer flex flex-col items-center justify-center`}
                        
                         onClick={() => { setSelectedIndex(index); setChooseAlgo(format_algo_name(name)); } }> {name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default AlgoChoser;