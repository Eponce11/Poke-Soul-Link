import axios from "axios";
import { pokemonAPI } from "./constants";
const pokemonRoute = `${pokemonAPI}/generation/`;

const getPokemonGenerations = async () => {
  return await axios.get(pokemonRoute);
}

export default getPokemonGenerations;