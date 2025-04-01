"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalculadoraContainer, CalculadoraForm, CalculadoraFormLabel, CalculadoraInput, CalculadoraTitle, Select } from "./style";
import Jogos from "@/app/data/jogos";
import { setSensibilidade, setJogoOrigem, setJogoDestino, calcularResultado, setDpiDestino, setDpiOrigem } from "../../store/calSlice";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function Calculadora() {
  const dispatch = useDispatch();
  const { jogoOrigem, jogoDestino, sensibilidade, resultado, dpiOrigem, dpiDestino } = useSelector((state) => state.cal);

  useEffect(() => {
    dispatch(calcularResultado());
  }, [jogoOrigem, jogoDestino, sensibilidade, dpiOrigem, dpiDestino, dispatch]);

  const [copiado, setCopiado] = useState(false);

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
      <CalculadoraTitle className="text-lg font-semibold mb-5">
        Use o conversor para alterar a sensibilidade de <span className="text-[#e90c2a]">{jogoOrigem?.jogo || "tal jogo"}</span> para <span className="text-[#e90c2a]">{jogoDestino?.jogo || "esse jogo"}</span>
      </CalculadoraTitle>

      <CalculadoraForm className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="w-full md:w-[48%]">
            <CalculadoraFormLabel htmlFor="sensibilidade">
              Sua sensibilidade:
            </CalculadoraFormLabel>
            <CalculadoraInput
              id="sensibilidade"
              step="any"
              min="0"
              placeholder="Digite sua sensibilidade"
              className="w-full p-3 h-10 rounded-md border border-gray-300"
              type="number"
              value={sensibilidade.toString()}
              onChange={(e) => dispatch(setSensibilidade(parseFloat(e.target.value) || 0))}
            />
          </div>

          <div className="w-full md:w-[48%] flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[49%]">
              <CalculadoraFormLabel htmlFor="jogoOrigem">
                Converter de:
              </CalculadoraFormLabel>
              <Select
                id="jogoOrigem"
                className="w-full h-10 rounded-md border border-gray-300"
                value={jogoOrigem?.id?.toString() || ""}
                onChange={(e) => dispatch(setJogoOrigem(Jogos.find(j => j.id === parseInt(e.target.value))))}
              >
                <option disabled value="">Selecione o jogo de origem</option>
                {Jogos.map((jogo) => (
                  <option key={jogo.id} value={jogo.id.toString()}>{jogo.jogo}</option>
                ))}
              </Select>
            </div>

            <div className="w-full md:w-[49%]">
              <CalculadoraFormLabel htmlFor="jogoDestino">
                Converter para:
              </CalculadoraFormLabel>
              <Select
                id="jogoDestino"
                className="w-full h-10 rounded-md border border-gray-300"
                value={jogoDestino?.id?.toString() || ""}
                onChange={(e) => dispatch(setJogoDestino(Jogos.find(j => j.id === parseInt(e.target.value))))}
              >
                <option disabled value="">Selecione o jogo de destino</option>
                {Jogos.map((jogo) => (
                  <option key={jogo.id} value={jogo.id.toString()}>{jogo.jogo}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-5">
          <div className="w-full md:w-[48%]">
            <CalculadoraFormLabel htmlFor="dpiOrigem">
              Seu DPI:
            </CalculadoraFormLabel>
            <CalculadoraInput
              id="dpiOrigem"
              min="0"
              className="w-full p-3 h-10 rounded-md border border-gray-300"
              type="number"
              value={dpiOrigem.toString()}
              onChange={(e) => dispatch(setDpiOrigem(parseFloat(e.target.value) || 0))}
            />
          </div>

          <div className="w-full md:w-[48%]">
            <CalculadoraFormLabel htmlFor="dpiDestino">
              DPI que deseja:
            </CalculadoraFormLabel>
            <CalculadoraInput
              id="dpiDestino"
              min="0"
              className="w-full p-3 h-10 rounded-md border border-gray-300"
              type="number"
              value={dpiDestino.toString()}
              onChange={(e) => dispatch(setDpiDestino(parseFloat(e.target.value) || 0))}
            />
          </div>
        </div>

        <div className="mt-5 w-[100px]">
          <CalculadoraFormLabel>Resultado:</CalculadoraFormLabel>
          <button
            onClick={copiarResultado}
            className={`transition cursor-pointer ${copiado ? 'hover:bg-[#adadad]' : 'hover:bg-[#e90c2a]'} hover:opacity-80 p-2 w-full h-10 rounded-md flex justify-center items-center gap-2 text-white ${copiado ? 'bg-[#adadad]' : 'bg-[#e90c2a]'}`}
          >

            {resultado.toFixed(2)} {copiado ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
      </CalculadoraForm>
    </CalculadoraContainer>
  );
}