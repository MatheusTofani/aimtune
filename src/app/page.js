"use client";
import { useState, useEffect, useRef } from "react";
import Header from "./containers/header/page";
import Hero from "./containers/hero/page";
import { Container } from "./components/container/style";
import { AiOutlineAim } from "react-icons/ai";
import Footer from "./containers/footer/page";
import Jogos from "./data/jogos";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowHeader(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full "
        }`}
      >
        <Header />
      </div>

      <section ref={heroRef} id="hero" className="relative z-40">
        <Hero />
      </section>

      <Container>
        <section className="my-16 md:my-[120px] flex flex-col md:flex-row justify-between items-center gap-8">
          <AiOutlineAim className="text-6xl md:text-[200px] text-[#e90c2a]" />
          <div className="w-full md:w-[50%] flex flex-col gap-8 text-center md:text-left px-5 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold">Sobre o AimTune</h2>
            <p className="text-left md:text-lg">
              O AimTune foi criado para ajudar jogadores a otimizarem sua sensibilidade em diferentes jogos de FPS.
              Nossa plataforma permite converter sensibilidades entre jogos e calcular o eDPI ideal para melhorar a
              precisão e desempenho. Nosso objetivo é proporcionar uma experiência personalizada e acessível para todos
              os jogadores, desde iniciantes até profissionais.
            </p>
            <button className="bg-[#e90c2a] cursor-pointer hover:opacity-80 transition duration-300 w-[120px] text-[#FEF6EC] font-semibold p-2 rounded-md mx-auto md:mx-0">
              <a href="/sobre">Saiba mais</a>
            </button>
          </div>
        </section>
      </Container>

      <div className="w-full h-[500px] relative">
        <video
          src="/jogo.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover absolute z-[-2]"
        ></video>
        <div className="absolute inset-0 bg-black/80 z-[-1]"></div>
        <Container className="flex h-full flex-col justify-center items-center md:items-start gap-8 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#fef6ec]">
            Conversor de sensibilidade
          </h1>
          <p className="text-[#fef6ec] w-full md:w-[50%]">
            Nosso conversor de sensibilidade permite que você ajuste sua mira entre diversos jogos FPS, garantindo que
            sua precisão e consistência sejam mantidas independentemente do título que estiver jogando.
          </p>
          <button className="bg-[#e90c2a] cursor-pointer hover:opacity-80 transition duration-300 w-[120px] text-[#FEF6EC] font-semibold p-2 rounded-md">
            <a href="/conversor">Ver mais</a>
          </button>
        </Container>
      </div>

      <Container>
        <section className="flex flex-col justify-center w-full gap-8 my-16 md:my-[120px]">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Últimos jogos adicionados
          </h1>

          <div className="md:flex md:justify-center block md:gap-12">
            {Jogos.slice(-5).map((jogo, index) => (
              <div key={index} className="relative m-auto md:m-0 mb-8 w-[160px] h-[200px] md:w-[200px] md:h-[250px]">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={jogo.image}
                  alt={jogo.jogo}
                />
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}
