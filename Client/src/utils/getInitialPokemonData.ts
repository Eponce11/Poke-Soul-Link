import axios from "axios";
import { pokemonAPI } from "./constants";
const pokemonsRoute = `${pokemonAPI}/pokemon?limit=5000`;

const getInitialPokemonData = async () => {
  return await axios.get(pokemonsRoute);
};

export default getInitialPokemonData;
