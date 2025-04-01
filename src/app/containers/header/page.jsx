"use client";

import { useEffect, useState } from "react";
import { Container } from "../../components/container/style";
import { HeaderBranding, HeaderContainer } from "./style";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <HeaderContainer className="shadow-xl w-full">
            <Container className="h-full flex justify-between items-center px-4">
                <HeaderBranding > <a href="/">
                <img src="/logobranca.png" alt="Logo Aim Tune" className="md:w-[90px] hidden md:block" />
                <img src="/alvobranco.png" alt="Logo Aim Tune" className="md:hidden w-[50px]" />
                </a> </HeaderBranding>
                <nav className="hidden md:block">
                    <ul className="flex gap-5">
                        <li>
                            <a href="/conversor" className="text-[#FEF6EC] hover:opacity-60 transition duration-300">
                                Conversor de Sensibilidade
                            </a>
                        </li>
                        <li>
                            <a href="/edpi" className="text-[#FEF6EC] hover:opacity-60 transition duration-300">
                                Calculadora eDPI
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="text-[#FEF6EC] md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </Container>

            {/* Menu celular */}
            {isMenuOpen && (
                <div className="z-50 relative md:hidden bg-[#e90c2a]  w-full py-4">
                    <ul className="flex flex-col items-center gap-4">
                        <li>
                            <a href="/conversor" className="text-[#FEF6EC] hover:text-[#ffffff] transition-colors">
                                Conversor de Sensibilidade
                            </a>
                        </li>
                        <li>
                            <a href="/edpi" className="text-[#FEF6EC] hover:text-[#ffffff] transition-colors">
                                Calculadora eDPI
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </HeaderContainer>
    );
}