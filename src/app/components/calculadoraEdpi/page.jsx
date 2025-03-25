"use client";
import { FaCopy, FaCheck } from "react-icons/fa";
import { 
    CalculadoraContainer, 
    CalculadoraForm, 
    CalculadoraFormLabel, 
    CalculadoraInput 
} from "@/app/containers/calculadora/style";
import { setSensibilidade, setDpi, calcularEdpi } from "@/app/store/edpiSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CalculadoraEdpi() {
    const dispatch = useDispatch();
    const { sensibilidade, dpi, resultado } = useSelector((state) => state.edpi);
    
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
        dispatch(calcularEdpi());
    }, [sensibilidade, dpi, dispatch]);

    const copiarResultado = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(resultado.toFixed(2));
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch (error) {
            console.error("Erro ao copiar: ", error);
        }
    };

    return (
        <CalculadoraContainer className="w-full h-auto rounded-md my-10 p-5 md:p-10 shadow-lg">
            <CalculadoraForm className="flex flex-col md:flex-row gap-5 items-center">
                {/* Grupo Sensibilidade - Layout original mantido */}
                <div className="w-full md:w-auto">
                    <CalculadoraFormLabel htmlFor="sensibilidade">
                        Digite sua Sensibilidade
                    </CalculadoraFormLabel>
                    <CalculadoraInput
                        id="sensibilidade"
                        value={sensibilidade}
                        onChange={(e) => dispatch(setSensibilidade(e.target.value))}
                        className="w-full p-3 h-10 rounded-md border border-gray-300"
                        type="number"
                        min={0}
                    />
                </div>

                {/* Grupo DPI - Layout original mantido */}
                <div className="w-full md:w-auto">
                    <CalculadoraFormLabel htmlFor="dpi">
                        Digite seu DPI
                    </CalculadoraFormLabel>
                    <CalculadoraInput
                        id="dpi"
                        value={dpi}
                        onChange={(e) => dispatch(setDpi(e.target.value))}
                        className="w-full p-3 h-10 rounded-md border border-gray-300"
                        type="number"
                        min={0}
                    />
                </div>

                {/* Grupo Resultado - Layout original mantido */}
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <CalculadoraFormLabel>Resultado:</CalculadoraFormLabel>
                    <button 
                        onClick={copiarResultado} 
                        className="transition cursor-pointer hover:bg-[#e90c2ae1] w-full md:w-[120px] h-10 rounded-md flex justify-center items-center gap-2 text-white bg-[#e90c2a]"
                    >
                        {resultado.toFixed(2)} {copiado ? <FaCheck /> : <FaCopy />}
                    </button>
                </div>
            </CalculadoraForm>
        </CalculadoraContainer>
    );
}