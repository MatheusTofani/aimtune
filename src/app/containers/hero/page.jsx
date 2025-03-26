"use client";

import { Container } from "@/app/components/container/style";
import { HeroContainer } from "./style";
import { HiArrowPath } from "react-icons/hi2";
import { RiCalculatorLine } from "react-icons/ri";

export default function Hero() {
    return (
        <HeroContainer className="w-full h-[800px] flex flex-col justify-center items-center  ">
            <Container className="flex flex-col justify-center items-center h-full gap-20">
                <h1 className="text-[#FEF6EC] font-semibold text-2xl md:text-6xl ">Aim Tune</h1>
                <p className="text-[#FEF6EC]  font-[500] text-lg md:text-2xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem aperiam nemo quidem explicabo aut culpa enim dolor beatae. Voluptatem dolorem eos omnis cumque, ipsa natus rerum ad saepe nam.
                </p>

                <div className="flex  md:flex-row justify-center items-center gap-6 ">
                    <div className="h-[200px] w-[300px] p-5 flex flex-col justify-between items-center text-xl bg-[#fef6ec] rounded-xl">
                        <h2 className="text-[#e90c2a] font-semibold ">Converter Sensibilidade</h2>
                        <HiArrowPath className="text-3xl md:text-6xl text-[#e90c2a]" />
                        <a href="/conversor" className="hover:opacity-80 transition duration-300 w-full bg-[#e90c2a] text-[#FEF6EC] p-2 rounded-xl font-semibold text-center">Ver mais</a>
                    </div>

                    <div className="h-[200px] w-[300px] p-5 flex flex-col justify-between items-center text-xl bg-[#fef6ec] rounded-xl">
                        <h2 className="text-[#e90c2a] font-semibold ">Calcular eDPI</h2>
                        <RiCalculatorLine className="text-3xl md:text-6xl text-[#e90c2a]" />
                        <a href="/edpi" className="hover:opacity-80 transition duration-300 w-full bg-[#e90c2a] text-[#FEF6EC] p-2 rounded-xl font-semibold text-center">Ver mais</a>
                    </div>
                </div>
            </Container>
        </ HeroContainer>
    )
}