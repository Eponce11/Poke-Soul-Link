import { useState, useEffect } from "react";
import { getPokemonGenerations, getPokemonRegionData } from "../../utils";

const NewAttempt = () => {
  const [pokemonGens, setPokemonGens] = useState([]);
  const [selectedGen, setSelectedGen] = useState<string>("1");

  const [regionData, setRegionData] = useState({ version_groups: [] });
  const [gameVersion, setGameVersion] = useState<string>("");

  const [players, setPlayers] = useState<Array<string>>([]);
  const [playerUsername, setPlayerUsername] = useState<string>("");

  const fetchPokemonGenerations = async () => {
    const pokemonGenerations = await getPokemonGenerations();
    console.log(pokemonGenerations.data.results);
    setPokemonGens(pokemonGenerations.data.results);
  };

  const fetchPokemonRegionData = async () => {
    const pokemonRegionData = await getPokemonRegionData(selectedGen);
    console.log(pokemonRegionData.data);
    setRegionData(pokemonRegionData.data);
  };

  useEffect(() => {
    fetchPokemonGenerations();
  }, []);

  return (
    <div className="h-full w-full bg-[#050511]">
      <input type="text" />
      <select onChange={(e) => setSelectedGen(e.target.value)}>
        {pokemonGens.map((gen, idx) => (
          <option key={idx} value={1 + idx}>
            {gen["name"]}
          </option>
        ))}
      </select>
      <button onClick={fetchPokemonRegionData} className="text-white">
        Some Button
      </button>
      <select onChange={(e) => setGameVersion(e.target.value)}>
        {regionData.version_groups.map((version, idx) => (
          <option key={idx}>{version["name"]}</option>
        ))}
      </select>
      <input
        type="text"
        value={playerUsername}
        onChange={(e) => setPlayerUsername(e.target.value)}
      />
      <button
        className="text-[white]"
        onClick={() => {
          setPlayers([...players, playerUsername]);
          setPlayerUsername("");
        }}
      >
        Add Player
      </button>

      <button onClick={() => console.log(players)} className="text-white">
        See Players
      </button>
    </div>
  );
};

export default NewAttempt;
