"use client";
import { useState, useEffect } from "react";
import Calculadoras from "../components/calculadoras/page";
import { Container } from "../components/container/style";
import Dados from "../components/dados/page";
import Footer from "../containers/footer/page";
import Header from "../containers/header/page";
import { ContainerCalculator, ImageBackground, TitleSensiCalculator } from "../conversor/style";
import CalculadoraEdpi from "../components/calculadoraEdpi/page";
import TutorialEDPI from "../components/tutorialEdpi/page";

export default function Edpi() {
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
       <ContainerCalculator className="pt-10 relative overflow-hidden flex flex-col items-centers justify-center">
         {loadedImages.length > 0 && (
           <ImageBackground
             src={loadedImages[currentImageIndex]}
             alt="Background"
             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
           />
         )}
           <Container>  
          <TitleSensiCalculator className="text-4xl font-semibold relative z-10">
            Calcular eDPI
          </TitleSensiCalculator>
          <CalculadoraEdpi />
        </Container>
      </ContainerCalculator>
  
      <Container>
        <TutorialEDPI />
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
