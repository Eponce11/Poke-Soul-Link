
import { Navbar, PokeCard } from "../../components";

const Home = () => {



    return (
        <div className="h-full w-full bg-[#050511] text-[red] relative flex flex-col items-center">
            <Navbar/>
            <div className="flex w-[1000px] justify-between">
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
            </div>
        </div>
    )
}


export default Home;