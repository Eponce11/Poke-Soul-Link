import axios from "axios";
import { pokemonAPI } from "./constants";

const getPokemonRegionData = async (regionIdx: string) => {
  return await axios.get(`${pokemonAPI}/region/${regionIdx}`)
}

export default getPokemonRegionData;