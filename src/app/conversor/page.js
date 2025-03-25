"use client";
import { useState, useEffect } from "react";
import { Container } from "../components/container/style";
import Header from "../containers/header/page";
import Calculadora from "../containers/calculadora/page";
import { ContainerCalculator, TitleSensiCalculator } from "./style";
import TutorialConverter from "../components/tutorial/page";
import Footer from "../containers/footer/page";
import Dados from "../components/dados/page";
import Calculadoras from "../components/calculadoras/page";

export default function Conversor() {
  const images = ["/fortnite.png", "/valorant.png", "/cs2.png", "/cod.png", "/minecraft.png", "/apex.png"];   
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

      <ContainerCalculator style={{ backgroundImage: `url(${backgroundImage}) ` }} className="py-10 flex flex-col items-center justify-center"> 
        <TitleSensiCalculator className="text-4xl font-semibold">
          Conversor de Sensibilidade
        </TitleSensiCalculator>

        <Container className="p-4">
          <Calculadora />
        </Container>
      </ContainerCalculator>

      <Container>
        <TutorialConverter />
        <Dados />
        <Calculadoras />
      </Container>

      <Footer />
      </>
  );
}
