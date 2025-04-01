"use client";
import { Container } from "@/app/components/container/style";
import { HeroContainer } from "./style";
import { HiArrowPath } from "react-icons/hi2";
import { RiCalculatorLine } from "react-icons/ri";

export default function Hero() {
    return (
        <HeroContainer className="w-full min-h-[500px] md:min-h-[800px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-10 md:py-20">
            <Container className="flex flex-col justify-center items-center h-full gap-13 md:gap-25 text-center">
                <img className="md:h-[200px] h-[120px]" src="/logobranca.png" alt="Logo" />
                    
                
                
                <p className="text-[#FEF6EC] font-[500] text-left sm:text-lg md:text-xl lg:text-2xl   w-full px-4">
                Ajuste sua mira e eleve sua gameplay com o nosso conversor de sensibilidade e calculadora de eDPI. Compativel com os principais jogos do mercado.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 md:gap-8 w-full max-w-4xl px-4">

                    {/* Card Conversor */}

                    <div className="w-full sm:w-[280px] h-[180px] sm:h-[220px] md:h-[240px] p-4 md:p-5 flex flex-col justify-between items-center text-lg bg-[#fef6ec] rounded-xl">
                        <h2 className="text-[#e90c2a] font-semibold text-xl md:text-2xl text-center">
                            Converter Sensibilidade
                        </h2>
                        <HiArrowPath className="text-4xl md:text-5xl text-[#e90c2a]" />
                        <a 
                            href="/conversor" 
                            className="hover:opacity-80 transition duration-300 w-full bg-[#e90c2a] text-[#FEF6EC] p-2 rounded-xl font-semibold text-sm md:text-base text-center"
                        >
                            Ver mais
                        </a>
                    </div>

                    {/* Card eDPI */}
                    <div className="w-full sm:w-[280px] h-[180px] sm:h-[220px] md:h-[240px] p-4 md:p-5 flex flex-col justify-between items-center text-lg bg-[#fef6ec] rounded-xl">
                        <h2 className="text-[#e90c2a] font-semibold text-xl md:text-2xl text-center">
                            Calcular eDPI
                        </h2>
                        <RiCalculatorLine className="text-4xl md:text-5xl text-[#e90c2a]" />
                        <a 
                            href="/edpi" 
                            className="hover:opacity-80 transition duration-300 w-full bg-[#e90c2a] text-[#FEF6EC] p-2 rounded-xl font-semibold text-sm md:text-base text-center"
                        >
                            Ver mais
                        </a>
                    </div>
                </div>
            </Container>
        </HeroContainer>
    );
}