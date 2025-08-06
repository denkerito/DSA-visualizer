import { useState } from "react";

interface BasicLiProps {
  value: string;
  index:number;
  setChooseAlgo: (algo: string) => void
}

function BasicLi({value, index, setChooseAlgo}:BasicLiProps){
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const format_algo_name = (name: string ) =>{
        name=name.toLowerCase();
        name=name.replace(" ", "_");
        return name;
    }
    return (
        <li className={`w-full h-[3.2rem] cursor-pointer rounded-[6px] flex items-center justify-center flex-row space-x-[2rem]
            ${index===selectedIndex ? 'bg-[#5353ff] text-white' : 'hover:bg-[#5353ff] hover:text-white hover:translate-x-[1px] hover:-translate-y-[1px] transition-all duration-300 ease-out' }`}
         onClick={() => { setSelectedIndex(index); setChooseAlgo(format_algo_name(value)); } }>
            <p>{value}</p>
        </li>
    )
}

export default BasicLi;