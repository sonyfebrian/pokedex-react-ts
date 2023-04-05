import { PokemonType } from "../PokemonTypeFilter";
import { Pokemon } from "app/utils/types/Pokemon";
import { pokemonTypes } from "app/utils/pokemonType";
import { fetchPokemon } from "app/utils/api/fetchPokemon";
import * as C from "./styles";

type PokemonCardProps = {
    pokemon: Pokemon ;
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
  };

export const PokemonCard = (props: PokemonCardProps) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(props.pokemon.name);
    if (requestPokemon.data) {
      props.setPokemonData(requestPokemon.data);
      props.setModal(true);
    } else {
      // handle error case
      console.log("Error: Unable to fetch data for the selected Pokemon");
    }
  };

  console.log(imgUrl)
  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (

<>

<div className='flex items-center justify-center my-14 from-gray-700  lg:w-1/3'>

<div className="relative w-full  group max-w-md min-w-0 mx-auto break-words border dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-3xl">
    <div className="pb-6">
        <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full">
                <div className="relative">
                    <img src={imgUrl} alt="" className="dark:shadow-xl  dark:border-gray-800 align-middle absolute -m-28   lg:-ml-16 max-w-[200px]" />
                </div>
            </div>
        </div>
        <div className="mt-2 mt-20 text-center">
            <h3 className="mb-1 text-2xl font-bold leading-normal text-white dark:text-gray-300">{formatPokemonId(props.pokemon.id)}</h3>
            <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                <div className="text-sm normal-case font-bold tracking-wide text-white dark:text-gray-300 font-mono text-xl">{props.pokemon.name}</div>
            </div>
            <div className="w-full text-center">
                <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                    <div className="flex space-x-2">
                    {props.pokemon.types.map(({ type }) => (
                        <PokemonType key={type.name} type={type.name} tabIndex={false} />
                      ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="h-6 mt-6">
        <C.MoreDetailsButton color={color} onClick={handleClick}>
        More Details
        </C.MoreDetailsButton>
        </div>
    </div>
</div>

</div>
</>

  );
};