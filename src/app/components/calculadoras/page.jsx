"use client";   
import React from "react";
import { Button } from "./style";
import { HiArrowPath } from "react-icons/hi2";
import { RiCalculatorLine } from "react-icons/ri";

export default function Calculadoras() {
    return (
        <section className="text-center my-12 md:my-20">
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4">
                <article className="w-full md:w-[30%] h-[250px] md:h-[300px] py-8 md:py-10 px-5 rounded-lg bg-[#e90c2a] flex flex-col justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#FEF6EC] text-center">Converter Sensibilidade</h2>
                    <HiArrowPath className="text-6xl md:text-7xl text-[#FEF6EC]" />
                    <Button className="w-[120px] p-2 rounded-xl font-semibold"><a href="/conversor">Ver mais</a></Button>
                </article>

                <article className="w-full md:w-[30%] h-[250px] md:h-[300px] py-8 md:py-10 px-5 rounded-lg bg-[#e90c2a] flex flex-col justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#FEF6EC] text-center">Calcular eDPI</h2>
                    <RiCalculatorLine className="text-6xl md:text-7xl text-[#FEF6EC]" />
                    <Button className="w-[120px] p-2 rounded-xl font-semibold"><a href="/edpi">Ver mais</a></Button>
                </article>
            </div>
        </section>
    );
}