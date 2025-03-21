import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalculadoraContainer, CalculadoraForm, CalculadoraFormLabel, CalculadoraInput, CalculadoraTitle, Select } from "./style";
import Jogos from "@/app/data/jogos";
import { setSensibilidade, setJogoOrigem, setJogoDestino, calcularResultado, setDpiDestino, setDpiOrigem } from "../../store/calSlice";

export default function Calculadora() {
  const dispatch = useDispatch();
  const { jogoOrigem, jogoDestino, sensibilidade, resultado, dpiOrigem, dpiDestino } = useSelector((state) => state.cal);

  useEffect(() => {
    dispatch(calcularResultado());
  }, [jogoOrigem, jogoDestino, sensibilidade, dpiOrigem, dpiDestino, dispatch]);

  return (
    <CalculadoraContainer className="w-full h-auto rounded-md my-10 p-5 md:p-10 shadow-lg">
      <CalculadoraTitle className="text-lg font-semibold mb-5"> Use o conversor para alterar a sensibilidade  de <span className="text-[#e90c2a]">{  jogoOrigem?.jogo || "tal jogo"}</span> para <span className="text-[#e90c2a]"> {jogoDestino?.jogo || "esse jogo"} </span></CalculadoraTitle>

      <CalculadoraForm className="flex flex-col gap-5">

        {/* Input da sensibilidade */}

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
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                dispatch(setSensibilidade(isNaN(value) ? 0 : value));
              }}
            />
          </div>

          {/* Seleção dos jogos */}

          <div className="w-full md:w-[48%] flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[49%]">
              <CalculadoraFormLabel htmlFor="jogoOrigem">
                Converter de:
              </CalculadoraFormLabel>
              <Select
                id="jogoOrigem"
                className="w-full h-10 rounded-md border border-gray-300"
                value={jogoOrigem?.id?.toString() || ""}
                onChange={(e) => {
                  const jogo = Jogos.find((j) => j.id === parseInt(e.target.value));
                  dispatch(setJogoOrigem(jogo));
                }}
              >
                <option disabled value="">
                  Selecione o jogo de origem
                </option>
                {Jogos.map((jogo) => (
                  <option key={jogo.id} value={jogo.id.toString()}>
                    {jogo.jogo}
                  </option>
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
                onChange={(e) => {
                  const jogo = Jogos.find((j) => j.id === parseInt(e.target.value));
                  dispatch(setJogoDestino(jogo));
                }}
              >
                <option disabled value="">
                  Selecione o jogo de destino
                </option>
                {Jogos.map((jogo) => (
                  <option key={jogo.id} value={jogo.id.toString()}>
                    {jogo.jogo}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        {/* Inputs de DPI */}
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
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                dispatch(setDpiOrigem(isNaN(value) ? 0 : value));
              }}
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
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                dispatch(setDpiDestino(isNaN(value) ? 0 : value));
              }}
            />
          </div>
        </div>

        {/* Resultado */}
        
        <div className="mt-5">
          <strong>Resultado:</strong> {resultado === 0 ? 0 : resultado.toFixed(2)}
        </div>
      </CalculadoraForm>
    </CalculadoraContainer>
  );
}