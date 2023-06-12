import { useState, useEffect } from "react";
import { getPokemonGenerations } from "../../utils";

const NewAttempt = () => {
  const [pokemonGens, setPokemonGens] = useState([]);

  const fetchPokemonGenerations = async () => {
    const pokemonGenerations = await getPokemonGenerations();
    console.log(pokemonGenerations.data.results);
    setPokemonGens(pokemonGenerations.data.results);
  };

  useEffect(() => {
    fetchPokemonGenerations();
  }, []);

  return (
    <div className="h-full w-full bg-[#050511]">
      <input type="text" />
      <button className="text-[white]">Add Player</button>
      <select>
        {pokemonGens.map((gen, idx) => (
          <option key={idx}>{gen["name"]}</option>
        ))}
      </select>
    </div>
  );
};

export default NewAttempt;
