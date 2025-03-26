"use client";
import { useState } from "react";
import Calculadoras from "../components/calculadoras/page";
import { Container } from "../components/container/style";
import Dados from "../components/dados/page";
import TutorialConverter from "../components/tutorial/page";
import Footer from "../containers/footer/page";
import Header from "../containers/header/page";
import { ContainerCalculator, TitleSensiCalculator } from "../conversor/style";
import { useEffect } from "react";
import CalculadoraEdpi from "../components/calculadoraEdpi/page";

export default function Edpi() {
  const images = [
    "/fortnite.png",
    "/valorant.png",
    "/cs2.png",
    "/cod.png",
    "/minecraft.png",
    "/apex.png",
  ];
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <ContainerCalculator
        style={{ backgroundImage: `url(${backgroundImage}) ` }}
        className=" py-10 flex flex-col items-center justify-center"
      >
        <Container>
        <TitleSensiCalculator className="text-4xl font-semibold">
          Calcular eDPI
        </TitleSensiCalculator>
        <CalculadoraEdpi />
        </Container>
      </ContainerCalculator>

      <Container>
        <TutorialConverter />
        <Dados />
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-8 md:mb-12">Outras calculadoras</h1>
        <Calculadoras />
      </Container>

      <Footer />
    </>
  );
}
