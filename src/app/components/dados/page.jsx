import { FaMouse, FaCalculator } from "react-icons/fa";
export default function Dados() {
    return (
      <ul className="flex justify-center align-center w-full gap-20 my-50">
        <li className="flex align-center ">
            <FaMouse  className="text-[#e90c2a] text-[100px]"/>
            <div >
                <h2 className="text-5xl font-bold text-[#e90c2a]">+20</h2>
                <span className="text-3xl font-semibold">Jogos</span>
            </div>
        </li>

        <li className="flex align-center ">
            <FaCalculator  className="text-[#e90c2a] text-[100px]"/>
            <div >
                <h2 className="text-5xl font-bold text-[#e90c2a]">2</h2>
                <span className="text-3xl font-semibold">Calculadoras</span>
            </div>
        </li>

        <li className="flex align-center ">
            <FaMouse  className="text-[#e90c2a] text-[100px]"/>
            <div >
                <h2 className="text-5xl font-bold text-[#e90c2a]">+20</h2>
                <span className="text-3xl font-semibold">Jogos</span>
            </div>
        </li>
      </ul>
    );
}