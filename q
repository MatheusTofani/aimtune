[33mcommit 3671045932813362e3d88b2b2b7b827eaa8e9b65[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Matheus <matheus271112@gmail.com>
Date:   Tue Apr 1 11:01:00 2025 -0300

    Finalizando mvp

[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex ee9c43a..32fd0a9 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -14,7 +14,8 @@[m
         "react": "^19.0.0",[m
         "react-dom": "^19.0.0",[m
         "react-icons": "^5.5.0",[m
[31m-        "react-redux": "^9.2.0"[m
[32m+[m[32m        "react-redux": "^9.2.0",[m
[32m+[m[32m        "swiper": "^11.2.6"[m
       },[m
       "devDependencies": {[m
         "@eslint/eslintrc": "^3",[m
[36m@@ -5589,6 +5590,24 @@[m
         "url": "https://github.com/sponsors/ljharb"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/swiper": {[m
[32m+[m[32m      "version": "11.2.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/swiper/-/swiper-11.2.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-8aXpYKtjy3DjcbzZfz+/OX/GhcU5h+looA6PbAzHMZT6ESSycSp9nAjPCenczgJyslV+rUGse64LMGpWE3PX9Q==",[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "patreon",[m
[32m+[m[32m          "url": "https://www.patreon.com/swiperjs"[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "open_collective",[m
[32m+[m[32m          "url": "http://opencollective.com/swiper"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.7.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/tailwindcss": {[m
       "version": "4.0.14",[m
       "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.0.14.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 5f5ceb2..ee300fc 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -15,7 +15,8 @@[m
     "react": "^19.0.0",[m
     "react-dom": "^19.0.0",[m
     "react-icons": "^5.5.0",[m
[31m-    "react-redux": "^9.2.0"[m
[32m+[m[32m    "react-redux": "^9.2.0",[m
[32m+[m[32m    "swiper": "^11.2.6"[m
   },[m
   "devDependencies": {[m
     "@eslint/eslintrc": "^3",[m
[1mdiff --git a/public/a.mp4 b/public/a.mp4[m
[1mnew file mode 100644[m
[1mindex 0000000..fd7a064[m
Binary files /dev/null and b/public/a.mp4 differ
[1mdiff --git a/public/alvobranco.png b/public/alvobranco.png[m
[1mnew file mode 100644[m
[1mindex 0000000..03fc492[m
Binary files /dev/null and b/public/alvobranco.png differ
[1mdiff --git a/public/alvovermelho.png b/public/alvovermelho.png[m
[1mnew file mode 100644[m
[1mindex 0000000..7d4e50c[m
Binary files /dev/null and b/public/alvovermelho.png differ
[1mdiff --git a/public/file.svg b/public/file.svg[m
[1mdeleted file mode 100644[m
[1mindex 004145c..0000000[m
[1m--- a/public/file.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>[m
\ No newline at end of file[m
[1mdiff --git a/public/globe.svg b/public/globe.svg[m
[1mdeleted file mode 100644[m
[1mindex 567f17b..0000000[m
[1m--- a/public/globe.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>[m
\ No newline at end of file[m
[1mdiff --git a/public/logobranca.png b/public/logobranca.png[m
[1mnew file mode 100644[m
[1mindex 0000000..e3cc42f[m
Binary files /dev/null and b/public/logobranca.png differ
[1mdiff --git a/public/next.svg b/public/next.svg[m
[1mdeleted file mode 100644[m
[1mindex 5174b28..0000000[m
[1m--- a/public/next.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>[m
\ No newline at end of file[m
[1mdiff --git a/public/tutorial.mp4 b/public/tutorial.mp4[m
[1mindex ae3bbd2..e68097d 100644[m
Binary files a/public/tutorial.mp4 and b/public/tutorial.mp4 differ
[1mdiff --git a/public/tutorialEDPI.mp4 b/public/tutorialEDPI.mp4[m
[1mnew file mode 100644[m
[1mindex 0000000..66fbd33[m
Binary files /dev/null and b/public/tutorialEDPI.mp4 differ
[1mdiff --git a/public/vercel.svg b/public/vercel.svg[m
[1mdeleted file mode 100644[m
[1mindex 7705396..0000000[m
[1m--- a/public/vercel.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>[m
\ No newline at end of file[m
[1mdiff --git a/public/window.svg b/public/window.svg[m
[1mdeleted file mode 100644[m
[1mindex b2b2a44..0000000[m
[1m--- a/public/window.svg[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>[m
\ No newline at end of file[m
[1mdiff --git a/src/app/components/calculadoraEdpi/page.jsx b/src/app/components/calculadoraEdpi/page.jsx[m
[1mindex dd203ca..55ea370 100644[m
[1m--- a/src/app/components/calculadoraEdpi/page.jsx[m
[1m+++ b/src/app/components/calculadoraEdpi/page.jsx[m
[36m@@ -69,7 +69,7 @@[m [mexport default function CalculadoraEdpi() {[m
                     <CalculadoraFormLabel>Resultado:</CalculadoraFormLabel>[m
                     <button [m
                         onClick={copiarResultado} [m
[31m-                        className="transition cursor-pointer hover:bg-[#e90c2ae1] w-full md:w-[120px] h-10 rounded-md flex justify-center items-center gap-2 text-white bg-[#e90c2a]"[m
[32m+[m[32m                        className={`transition cursor-pointer ${copiado ? 'hover:bg-[#adadad]' : 'hover:bg-[#e90c2a]'} hover:opacity-80 p-2 w-full h-10 rounded-md flex justify-center items-center gap-2 text-white ${copiado ? 'bg-[#adadad]' : 'bg-[#e90c2a]'}`}[m
                     >[m
                         {resultado.toFixed(2)} {copiado ? <FaCheck /> : <FaCopy />}[m
                     </button>[m
[1mdiff --git a/src/app/components/tutorialEdpi/page.jsx b/src/app/components/tutorialEdpi/page.jsx[m
[1mindex 945b48e..1cbb5e0 100644[m
[1m--- a/src/app/components/tutorialEdpi/page.jsx[m
[1m+++ b/src/app/components/tutorialEdpi/page.jsx[m
[36m@@ -1,6 +1,6 @@[m
 import { TutorialVideo } from "./style";[m
 [m
[31m-export default function TutorialConverter() {[m
[32m+[m[32mexport default function TutorialEDPI() {[m
     return ([m
         <section className="my-10 px-4">[m
             <h1 className="text-2xl md:text-3xl font-semibold my-8 md:my-10 text-center md:text-left">[m
[36m@@ -31,7 +31,7 @@[m [mexport default function TutorialConverter() {[m
                 </ul>[m
 [m
                 <TutorialVideo[m
[31m-                    src="/tutorial.mp4"[m
[32m+[m[32m                    src="/tutorialEDPI.mp4"[m
                     muted[m
                     autoPlay[m
                     loop[m
[1mdiff --git a/src/app/components/tutorialEdpi/style.js b/src/app/components/tutorialEdpi/style.js[m
[1mindex e8ed2b1..4b7907c 100644[m
[1m--- a/src/app/components/tutorialEdpi/style.js[m
[1m+++ b/src/app/components/tutorialEdpi/style.js[m
[36m@@ -1,3 +1,5 @@[m
[32m+[m[32mimport styled from "styled-components";[m
[32m+[m
 export const TutorialVideo = styled.video`[m
   object-fit: cover;[m
   border:  solid 1px #e90c2a;[m
[1mdiff --git a/src/app/containers/calculadora/page.jsx b/src/app/containers/calculadora/page.jsx[m
[1mindex 527e632..7f2b557 100644[m
[1m--- a/src/app/containers/calculadora/page.jsx[m
[1m+++ b/src/app/containers/calculadora/page.jsx[m
[36m@@ -15,7 +15,7 @@[m [mexport default function Calculadora() {[m
   }, [jogoOrigem, jogoDestino, sensibilidade, dpiOrigem, dpiDestino, dispatch]);[m
 [m
   const [copiado, setCopiado] = useState(false);[m
[31m-  [m
[32m+[m
   const copiarResultado = async (e) => {[m
     e.preventDefault();[m
     try {[m
[36m@@ -120,10 +120,11 @@[m [mexport default function Calculadora() {[m
 [m
         <div className="mt-5 w-[100px]">[m
           <CalculadoraFormLabel>Resultado:</CalculadoraFormLabel>[m
[31m-          <button [m
[31m-            onClick={copiarResultado} [m
[31m-            className="transition cursor-pointer hover:bg-[#e90c2ae1] p-2 w-full h-10 rounded-md flex justify-center items-center gap-2 text-white bg-[#e90c2a]"[m
[32m+[m[32m          <button[m
[32m+[m[32m            onClick={copiarResultado}[m
[32m+[m[32m            className={`transition cursor-pointer ${copiado ? 'hover:bg-[#adadad]' : 'hover:bg-[#e90c2a]'} hover:opacity-80 p-2 w-full h-10 rounded-md flex justify-center items-center gap-2 text-white ${copiado ? 'bg-[#adadad]' : 'bg-[#e90c2a]'}`}[m
           >[m
[32m+[m
             {resultado.toFixed(2)} {copiado ? <FaCheck /> : <FaCopy />}[m
           </button>[m
         </div>[m
[1mdiff --git a/src/app/containers/footer/page.jsx b/src/app/containers/footer/page.jsx[m
[1mindex c5889b4..6efa193 100644[m
[1m--- a/src/app/containers/footer/page.jsx[m
[1m+++ b/src/app/containers/footer/page.jsx[m
[36m@@ -4,11 +4,11 @@[m [mimport { ItemFooter } from "./style";[m
 export default function Footer() {[m
     return ([m
         <footer className="w-full bg-[#e90c2a] py-8 px-4 md:px-8">[m
[31m-            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-8">[m
[31m-                {/* Ícones de Redes Sociais */}[m
[32m+[m[32m            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-15">[m
[32m+[m[32m                {/* Icones de Redes Sociais */}[m
                 <ul className="flex gap-4 md:gap-6">[m
                     <ItemFooter>[m
[31m-                        <a href="#" className="text-[#FEF6EC] hover:text-white transition-colors">[m
[32m+[m[32m                        <a href="#" className="text-[#FEF6EC] hover:text-[#e90c2a] transition-colors">[m
                             <FaInstagram size={24} />[m
                         </a>[m
                     </ItemFooter>[m
[36m@@ -24,26 +24,25 @@[m [mexport default function Footer() {[m
                     </ItemFooter>[m
                 </ul>[m
 [m
[31m-                {/* Título */}[m
[31m-                <h1 className="text-[#FEF6EC] font-semibold text-2xl md:text-4xl text-center">[m
[31m-                    Aim Tune[m
[31m-                </h1>[m
[32m+[m[32m                {/* Logo */}[m
[32m+[m[32m              <img className="md:h-[100px] hidden md:block" src="/logobranca.png" alt="Logo" />[m
[32m+[m[32m              <img className="md:hidden h-[80px]" src="/alvobranco.png" alt="Logo" />[m
 [m
[31m-                {/* Links Inferiores */}[m
[32m+[m[32m                {/* Infos */}[m
                 <div className="flex flex-col items-center gap-4">[m
                     <ul className="flex flex-wrap justify-center gap-4 md:gap-8">[m
                         <li>[m
[31m-                            <a href="#" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
[32m+[m[32m                            <a href="/sobre" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
                                 Sobre nós[m
                             </a>[m
                         </li>[m
                         <li>[m
[31m-                            <a href="#" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
[32m+[m[32m                            <a href="/termos-de-uso" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
                                 Termos de uso[m
                             </a>[m
                         </li>[m
                         <li>[m
[31m-                            <a href="#" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
[32m+[m[32m                            <a href="/privacidade" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">[m
                                 Privacidade[m
                             </a>[m
                         </li>[m
[1mdiff --git a/src/app/containers/footer/style.js b/src/app/containers/footer/style.js[m
[1mindex f3615b4..cd4de2f 100644[m
[1m--- a/src/app/containers/footer/style.js[m
[1m+++ b/src/app/containers/footer/style.js[m
[36m@@ -6,4 +6,14 @@[m [mexport const ItemFooter = styled.li`[m
   border-radius: 50%;[m
   border: solid 1px #fef6ec;[m
   padding: 12px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m
[32m+[m[32m  &:hover {[m
[32m+[m[32m    background-color: #fef6ec;[m
[32m+[m[32m    a{[m
[32m+[m[41m      [m
[32m+[m[32m      color: #e90c2a;[m
[32m+[m[32m    }[m
[32m+[m[41m    [m
[32m+[m[32m  }[m
 `;[m
[1mdiff --git a/src/app/containers/header/page.jsx b/src/app/containers/header/page.jsx[m
[1mindex e571561..fa0b9fb 100644[m
[1m--- a/src/app/containers/header/page.jsx[m
[1m+++ b/src/app/containers/header/page.jsx[m
[36m@@ -1,6 +1,6 @@[m
 "use client";[m
 [m
[31m-import { useState } from "react";[m
[32m+[m[32mimport { useEffect, useState } from "react";[m
 import { Container } from "../../components/container/style";[m
 import { HeaderBranding, HeaderContainer } from "./style";[m
 import { FaBars, FaTimes