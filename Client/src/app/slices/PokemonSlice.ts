import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface pokemonInitialState {
  allPokemon: any;
}

const initialState: pokemonInitialState = {
  allPokemon: undefined,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setInitialPokemon: (state, action) => {
      state.allPokemon = action;
    },
  },
});

export const { setInitialPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
