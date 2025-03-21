import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jogoOrigem: null,
  jogoDestino: null,
  sensibilidade: "", 
  resultado: 0,
  dpiOrigem: 0,
  dpiDestino: 0,
};

export const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    setSensibilidade: (state, action) => {
      state.sensibilidade = action.payload;
    },
    setJogoOrigem: (state, action) => {
      state.jogoOrigem = action.payload;
    },
    setJogoDestino: (state, action) => {
      state.jogoDestino = action.payload;
    },
    setDpiOrigem: (state, action) => {
      state.dpiOrigem = action.payload;
    },
    setDpiDestino: (state, action) => {
      state.dpiDestino = action.payload;
    },
    calcularResultado: (state) => {
      const { jogoOrigem, jogoDestino, sensibilidade, dpiOrigem, dpiDestino } = state;
    
      if (jogoOrigem && jogoDestino && sensibilidade > 0 && dpiOrigem > 0 && dpiDestino > 0) {
        if (jogoOrigem.id === jogoDestino.id) {
          state.resultado = sensibilidade * (dpiOrigem / dpiDestino); 
        } else {
          const fator = jogoOrigem.converter?.[jogoDestino.jogo];
          state.resultado = fator ? sensibilidade * fator * (dpiOrigem / dpiDestino) : 0;
        }
      } else {
        state.resultado = 0;
      }
    }    
    
  },
});

export const {
  setSensibilidade,
  setJogoOrigem,
  setJogoDestino,
  setDpiOrigem,
  setDpiDestino,
  calcularResultado,
} = calSlice.actions;
export default calSlice.reducer;