"use client";
import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ItemFooter } from "./style";

export default function Footer() {
    return (
        <footer className="w-full bg-[#e90c2a] py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-15">
                {/* Icones de Redes Sociais */}
                <ul className="flex gap-4 md:gap-6">
                    <ItemFooter>
                        <a href="#" className="text-[#FEF6EC] hover:text-[#e90c2a] transition-colors">
                            <FaInstagram size={24} />
                        </a>
                    </ItemFooter>
                    <ItemFooter>
                        <a href="#" className="text-[#FEF6EC] hover:text-white transition-colors">
                            <FaFacebook size={24} />
                        </a>
                    </ItemFooter>
                    <ItemFooter>
                        <a href="#" className="text-[#FEF6EC] hover:text-white transition-colors">
                            <FaWhatsapp size={24} />
                        </a>
                    </ItemFooter>
                </ul>

                {/* Logo */}
              <img className="md:h-[100px] hidden md:block" src="/logobranca.png" alt="Logo" />
              <img className="md:hidden h-[80px]" src="/alvobranco.png" alt="Logo" />

                {/* Infos */}
                <div className="flex flex-col items-center gap-4">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <li>
                            <a href="/sobre" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">
                                Sobre nós
                            </a>
                        </li>
                        <li>
                            <a href="/termos-de-uso" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">
                                Termos de uso
                            </a>
                        </li>
                        <li>
                            <a href="/privacidade" className="text-[#FEF6EC] hover:text-white underline text-sm md:text-base">
                                Privacidade
                            </a>
                        </li>
                    </ul>
                    <p className="text-[#FEF6EC] text-xs md:text-sm">
                        Copyright © 2025 - Aim Tune
                    </p>
                </div>
            </div>
        </footer>
    );
}