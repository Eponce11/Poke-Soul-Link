import axios from "axios";
import { pokemonAPI } from "./constants";
const pokemonRoute = `${pokemonAPI}/pokemon?limit=5000`;

const getInitialPokemonData = async () => {
  return await axios.get(pokemonRoute);
};

export default getInitialPokemonData;
