import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getInitialPokemonData } from "../../utils";
import { setInitialPokemon } from "../../app/slices/PokemonSlice";

const Landing = () => {
  const dispatch = useAppDispatch();
  //const navigate = useNavigate();
  const initialPokemon = useAppSelector((state) => state.pokemon.allPokemon);

  const fetchInitialPokemonData = async () => {
    if (!initialPokemon) {
      const pokemonData = await getInitialPokemonData();
      console.log(pokemonData.data.results);
      dispatch(setInitialPokemon(pokemonData.data.results));
    }
  };

  useEffect(() => {
    fetchInitialPokemonData();
  }, []);

  return <div className="h-full w-full bg-[#050511]"></div>;
};

export default Landing;
