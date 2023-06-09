import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/PokemonSlice";
import playersSlice from "./slices/PlayersSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    players: playersSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
