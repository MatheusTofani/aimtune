"use client";
import React from "react";

import { TutorialVideo } from "./style";

export default function TutorialEDPI() {
    return (
        <section className="my-10 px-4">
            <h1 className="text-2xl md:text-3xl font-semibold my-8 md:my-10 text-center md:text-left">
                Como calcular seu eDPI?
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <ul className="flex flex-col gap-6 md:gap-10 w-full md:w-[50%]">
                    <li>
                        <h3 className="text-lg md:text-xl font-semibold text-[#e90c2a]">Passo 1</h3>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#696969]">
                            Escolha a sua sensibilidade
                        </h2>
                    </li>

                    <li>
                        <h3 className="text-lg md:text-xl font-semibold text-[#e90c2a]">Passo 2</h3>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#696969]">
                            Escolha seu DPI
                        </h2>
                    </li>

                    <li>
                        <h3 className="text-lg md:text-xl font-semibold text-[#e90c2a]">Passo 3</h3>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#696969]">
                           Após ser calculado, resta apenas copiar o resultado
                        </h2>
                    </li>
                </ul>

                <TutorialVideo
                    src="/tutorialEDPI.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full md:h-[300px] h-[200px] md:w-[45%] rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}