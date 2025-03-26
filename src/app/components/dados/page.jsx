import { FaMouse, FaCalculator, FaMedal } from "react-icons/fa";

export default function Dados() {
    return (
        <ul className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-20 my-50">
            <li className="flex items-center  w-auto  md:w-[33%] gap-10 md:gap-6">
                <FaMouse className="text-[#e90c2a] text-6xl md:text-7xl" />
                <div>
                    <h2 className="text-xl md:text-3xl font-bold text-[#e90c2a]">+20</h2>
                    <span className="text-lg md:text-2xl font-semibold">Jogos</span>
                </div>
            </li>

            <li className="flex items-center  w-auto  md:w-[33%] gap-10 md:gap-6">
                <FaCalculator className="text-[#e90c2a] text-6xl md:text-7xl" />
                <div>
                    <h2 className="text-xl md:text-3xl font-bold text-[#e90c2a]">2</h2>
                    <span className="text-lg md:text-2xl font-semibold">Calculadoras</span>
                </div>
            </li>

            <li className="flex items-center  w-auto  md:w-[33%] gap-10 md:gap-6">
                <FaMedal className="text-[#e90c2a] text-6xl md:text-7xl" />
                <div>
                    <h2 className="text-xl md:text-3xl font-bold text-[#e90c2a]">Jogadores</h2>
                    <span className="text-lg md:text-2xl font-semibold">Satisfeitos</span>
                </div>
            </li>
        </ul>
    );
}