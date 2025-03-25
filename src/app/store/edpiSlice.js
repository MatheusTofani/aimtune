const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
sensibilidade: "",
dpi: "",
resultado: 0,
};

const edpiSlice = createSlice({
    name: "edpi",
    initialState,
    reducers: {
        setSensibilidade: (state, action) => {
            state.sensibilidade = action.payload;
        },
        setDpi: (state, action) => {
            state.dpi = action.payload;
        },

        calcularEdpi: (state) => {
            const { sensibilidade, dpi } = state;
           state.resultado = sensibilidade * dpi;
        },
    },
});

export const { setSensibilidade, setDpi, calcularEdpi } = edpiSlice.actions;
export default edpiSlice.reducer;


