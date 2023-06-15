import { useState, useEffect, useRef } from "react";
import { getPokemonRegionData } from "../../../../utils";

const SelectGame = (props: any) => {
  const { setCurrentStep, selectedGen, setGameVersion } = props;

  const [regionData, setRegionData] = useState({ version_groups: [] });

  const selectRef = useRef<any>(null);

  const fetchPokemonRegionData = async () => {
    const pokemonRegionData = await getPokemonRegionData(selectedGen);
    console.log(pokemonRegionData.data);
    setRegionData(pokemonRegionData.data);
  };

  const handleSelectGame = (e: any) => {
    e.preventDefault();
    console.log(selectRef.current.value);
    setGameVersion(selectRef.current.value);
    setCurrentStep((prev: number) => prev + 1);
  };

  useEffect(() => {
    fetchPokemonRegionData();
  }, []);

  return (
    <>
      <select ref={selectRef}>
        {regionData.version_groups.map((version, idx) => (
          <option key={idx}>{version["name"]}</option>
        ))}
      </select>
      <button onClick={() => setCurrentStep((prev: number) => prev - 1)}>
        Back
      </button>
      <button onClick={handleSelectGame}>Next</button>
    </>
  );
};

export default SelectGame;
