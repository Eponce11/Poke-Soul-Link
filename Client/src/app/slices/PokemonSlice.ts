import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";

interface pokemonInitialState {
  allPokemon: any;
}

const initialState: pokemonInitialState = {
  allPokemon: undefined,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
  },
});

// export const { setAllPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
