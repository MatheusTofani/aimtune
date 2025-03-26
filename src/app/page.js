"use client";
import { useState, useEffect, useRef } from "react";
import Header from "./containers/header/page";
import Hero from "./containers/hero/page";
import { Container } from "./components/container/style";
import { AiOutlineAim } from "react-icons/ai";

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
          showHeader ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <Header />
      </div>

      <section ref={heroRef} id="hero" className="relative z-40">
        <Hero />
      </section>

      <Container >
        <section className="mt-[90px] flex justify-between items-center">
          <div className="w-[50%] flex flex-col gap-8">
          <h2 className=" text-2xl md:text-3xl font-semibold ">Sobre nós</h2>
             <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem
                  aperiam nemo quidem explicabo aut culpa enim dolor beatae. Voluptatem
                  dolorem eos omnis cumque, ipsa natus rerum ad saepe nam.
                </p>
                <button className="bg-[#e90c2a] cursor-pointer hover:opacity-80  transition duration-300  w-[120px] text-[#FEF6EC] font-semibold p-2 rounded-md"><a>Saba mais</a></button>
          </div>
         <AiOutlineAim className="text-6xl md:text-[200px] text-[#e90c2a]" />
        </section>
      </Container>
    </>
  );
}
