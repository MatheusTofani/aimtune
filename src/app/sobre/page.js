"use client";

import Footer from "../containers/footer/page";
import Header from "../containers/header/page";
import { Container } from "../components/container/style";
import { AiOutlineAim } from "react-icons/ai";

export default function Sobre() {
    return (
        <>
            <Header />
            
            <section className=" my-12 md:my-20 px-10">
                <Container className="flex flex-col items-center gap-8">
                    <h1 className="text-3xl md:text-5xl font-semibold text-[#e90c2a]">Sobre o Aim Tune</h1>
                    <p className="text-lg md:text-xl ">
                        O Aim Tune é uma plataforma dedicada a jogadores que desejam otimizar sua precisão e desempenho em diversos jogos de tiro.
                        Nosso objetivo é oferecer ferramentas intuitivas e eficientes para converter sensibilidade entre jogos, calcular eDPI e aprimorar a jogabilidade.
                    </p>
                </Container>
            </section>
            
            <div className="w-full h-[400px] relative">
                <video src="/jogo.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover absolute z-[-2]"></video>
                <div className="absolute inset-0 bg-black/70 z-[-1]"></div>
                <Container className="flex flex-col justify-center items-center h-full text-center gap-6 px-4 md:px-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#fef6ec]">Descubra nossas ferramentas</h2>
                    <p className="text-lg text-[#fef6ec] max-w-2xl">
                        Experimente agora nosso conversor de sensibilidade e calculadora de eDPI para ajustar sua mira da forma ideal!
                    </p>
                    <a href="/conversor" className="bg-[#e90c2a] cursor-pointer hover:opacity-80 transition duration-300 w-[180px] text-[#FEF6EC] font-semibold p-3 rounded-md">
                        Explorar Ferramentas
                    </a>
                </Container>
            </div>

            <Container>
                <section className="my-12 md:my-20 flex flex-col md:flex-row md:justify-between items-center gap-12">
                    <img src="/alvovermelho.png" className="md:w-[150px] w-[100px]" />
                    <div className="w-full md:w-[60%] text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold">Nossa Missão</h2>
                        <p className="text-lg md:text-xl mt-4 px-4 md:px-0">
                            Nosso propósito é ajudar jogadores de todas as plataformas a configurarem suas sensibilidades com precisão e simplicidade,
                            garantindo uma experiência de jogo mais confortável e competitiva.
                        </p>
                    </div>
                </section>
            </Container>
            
      

            <Footer />
        </>
    );
}
