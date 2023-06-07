
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getInitialPokemonData } from "../../app/reducers/getInitialPokemonData";

const Landing = () => {

  const dispatch =  useDispatch();

  const test = useSelector((state:RootState) =>  getInitialPokemonData())
  

  useEffect( () => {

  })


    return (
        <div>

            Hello WOrld
        </div>
    )
}

export default Landing;