
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonAPI = "https://pokeapi.co/api/v2";
export const pokemonsRoute = `${pokemonAPI}/pokemon?limit=5000`;

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);