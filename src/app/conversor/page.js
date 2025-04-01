"use client";
import { useState, useEffect } from "react";
import { Container } from "../components/container/style";
import Header from "../containers/header/page";
import Calculadora from "../containers/calculadora/page";
import { ContainerCalculator, TitleSensiCalculator, ImageBackground } from "./style";
import TutorialConverter from "../components/tutorial/page";
import Footer from "../containers/footer/page";
import Dados from "../components/dados/page";
import Calculadoras from "../components/calculadoras/page";

export default function Conversor() {
  const imagePaths = [
    "/fortnite.png",
    "/valorant.png",
    "/cs2.png",
    "/cod.png",
    "/minecraft.png",
    "/apex.png",
  ];

  const [loadedImages, setLoadedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);


  useEffect(() => {
    const preload = async () => {
      const promises = imagePaths.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      });

      const loaded = await Promise.all(promises);
      setLoadedImages(loaded);
    };

    preload();
  }, []);


  useEffect(() => {
    if (loadedImages.length > 0) {
      const interval = setInterval(() => {
        
        setFadeOut(true);

        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
          setFadeOut(false); 
        }, 1000); 

      }, 5000); 

      return () => clearInterval(interval);
    }
  }, [loadedImages]);

  return (
    <>
      <Header />
      <ContainerCalculator className="pt-10 relative overflow-hidden">
        {loadedImages.length > 0 && (
          <ImageBackground
            src={loadedImages[currentImageIndex]}
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
        <TitleSensiCalculator className="text-4xl font-semibold relative z-10">
          Conversor de Sensibilidade
        </TitleSensiCalculator>

        <Container className="p-4 relative z-10">
          <Calculadora />
        </Container>
      </ContainerCalculator>

      <Container>
        <TutorialConverter />
        <Dados />
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
          Outras calculadoras
        </h1>
        <Calculadoras />
      </Container>

      <Footer />
    </>
  );
}
