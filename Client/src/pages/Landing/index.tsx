import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getInitialPokemonData } from "../../utils";
import { setInitialPokemon } from "../../app/slices/PokemonSlice";

const Landing = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialPokemon = useAppSelector((state) => state.pokemon.allPokemon);

  const fetchData = async () => {
    if (!initialPokemon) {
      const pokemonData = await getInitialPokemonData();
      console.log(pokemonData.data.results);
      dispatch(setInitialPokemon(pokemonData.data.results));
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div
      onClick={() => {
        navigate("/home");
      }}
    >
      Hello WOrld
    </div>
  );
};

export default Landing;
