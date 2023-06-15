import { useState, useEffect, useRef } from "react";
import { getPokemonGenerations } from "../../../../utils";

const SelectGen = (props: any) => {
  const { setSelectedGen, setCurrentStep } = props;

  const [pokemonGens, setPokemonGens] = useState([]);

  const selectRef = useRef<any>(null);

  const fetchPokemonGenerations = async () => {
    const pokemonGenerations = await getPokemonGenerations();
    console.log(pokemonGenerations.data.results);
    setPokemonGens(pokemonGenerations.data.results);
  };

  const handleGenSelect = (e: any) => {
    e.preventDefault();
    setSelectedGen(selectRef.current.value);
    setCurrentStep((prev: number) => prev + 1);
  };

  useEffect(() => {
    fetchPokemonGenerations();
  }, []);

  return (
    <>
      <h3 className="text-[48px]">New Attempt</h3>
      <div className="flex justify-between">
        <select className="w-[45%]" ref={selectRef}>
          {pokemonGens.map((gen: any, idx: number) => (
            <option key={idx} value={1 + idx}>
              {gen["name"]}
            </option>
          ))}
        </select>
        <button className="bg-[red] w-[45%]" onClick={handleGenSelect}>
          Select
        </button>
      </div>
    </>
  );
};

export default SelectGen;
