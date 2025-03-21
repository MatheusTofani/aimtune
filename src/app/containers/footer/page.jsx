import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ItemFooter } from "./style";

export default function Footer() {
    return (
        <footer className="w-full h-auto p-15 bg-[#e90c2a] flex flex-col justify-center items-center gap-15">
            <ul className="flex gap-5">
                <ItemFooter >
                    <a href="">
                        <FaInstagram />
                    </a>
                </ItemFooter>

                <ItemFooter >
                    <a href="">
                        <FaFacebook />
                    </a>
                </ItemFooter>

                <ItemFooter >
                    <a href="">
                        <FaWhatsapp />
                    </a>
                </ItemFooter>
            </ul>

            <h1 className="text-[#FEF6EC] font-semibold text-4xl">  Aim Tune  </h1>
            <div className="text-center">
                <ul className="flex gap-10 text-lg">
                    <li className="text-[#FEF6EC] underline ">Sobre nós</li>
                    <li className="text-[#FEF6EC] underline ">Termos de uso</li>
                    <li className="text-[#FEF6EC] underline "> Privacidade</li>
                </ul>

                <h3 className="mt-2 text-[#FEF6EC] text-sm">Copyright © 2025 - Aim Tune</h3>
            </div>
        </footer>
    );
}
