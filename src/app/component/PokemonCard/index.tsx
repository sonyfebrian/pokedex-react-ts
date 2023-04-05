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
//     <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
//   <div 
//        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
//   <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
//     <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
//     <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
//       <h1 className="text-gray-800 font-bold ">$129</h1>
//       <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
//     </div>
//   </div>
// </div>
<C.Container>
<C.CardOverlay color={color} />
<C.PokemonImg>
  <img src={imgUrl} alt={props.pokemon.name} />
</C.PokemonImg>
<C.PokemonNumber>{formatPokemonId(props.pokemon.id)}</C.PokemonNumber>
<C.PokemonName>{props.pokemon.name}</C.PokemonName>
<C.PokemonType>
  {props.pokemon.types.map(({ type }) => (
    <PokemonType key={type.name} type={type.name} tabIndex={false} />
  ))}
</C.PokemonType>
<C.PokemonFeatures>
  <C.PokemonWeight>
    <div>
     
      <span>{`${props.pokemon.weight / 10}`} kg</span>
    </div>
    <span>Peso</span>
  </C.PokemonWeight>
  <C.PokemonHeight>
    <div>
   
      <span>{`${props.pokemon.height / 10}`} m</span>
    </div>
    <span>Altura</span>
  </C.PokemonHeight>
</C.PokemonFeatures>
<C.MoreDetailsButton color={color} onClick={handleClick}>
 
  Mais Detalhes
</C.MoreDetailsButton>
</C.Container>
  );
};