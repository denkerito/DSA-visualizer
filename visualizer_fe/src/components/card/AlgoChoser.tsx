import BasicLi from "../list_element/BasicLi";
import SortIcon from '../../assets/sort-up-svgrepo-com.svg?react';



interface AlgoChoserProps {
    algorithms: string[];
    setChooseAlgo: (algo: string) => void
}


function AlgoChoser({algorithms = ["no found"], setChooseAlgo} : AlgoChoserProps) {
    return (
        <div className="w-[23.5rem] h-fit rounded-[1.1rem] bg-[#242832]"
        style={{
            backgroundImage: "linear-gradient(139deg, #242832 0%, #241c28 100%)"
        }}
        >
            <div className ="w-full justify-center flex flex-row items-center h-[4rem] border-b border-[#42434a] space-x-[1rem]">
                <SortIcon width={'2rem'} color="text-white"/>
                <h1 className="text-[#FEFBF6] text-[1.2rem] font-bold">CHOOSE YOUR ALGORITHMS</h1>
            </div>
            <div className="w-full h-[85%] p-[2%]">
                <ul className="list-image-none flex space-y-2 flex-col text-[1.08rem] font-medium font-roboto">
                    {algorithms.map((name, index) =>
                        <BasicLi key={name} value={name} index={index} setChooseAlgo={setChooseAlgo} />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default AlgoChoser;