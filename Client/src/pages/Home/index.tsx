import { Navbar, PokeCard } from "../../components";
import axios from "axios";
import { useEffect } from "react";



const Home = () => {
  const temp = [0, 0, 0];

  useEffect(() => {
    initialFetch();
  }, []);

  const initialFetch = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full w-full bg-[#050511] marker:relative flex flex-col items-center">
      <Navbar />
      <div className="flex w-[1000px] justify-between">
      </div>
    </div>
  );
};

export default Home;
