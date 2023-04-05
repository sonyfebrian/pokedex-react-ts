import { SyntheticEvent } from "react"
import { pokemonTypes } from "app/utils/pokemonType"
import * as C from "./styles";

type PokemonTypeProps = {
    type: string;
    tabIndex: boolean;
    handleClick?: (e: SyntheticEvent) => void;
  };

export const PokemonType = (props: PokemonTypeProps) => {
    const [{ name, color }] = pokemonTypes.filter(
        (item) => item.name === props.type
      );
      const imgUrl = require(`/src/app/assets/pokemonTypes/${name}.svg`);
     
    return name && color ? (
        
     
  <> <C.Type
  color={color}
  value={name}
  onClick={props.handleClick}
  tabIndex={props.tabIndex ? 0 : -1}
>
  <img src={imgUrl} width={16} height={16} alt={name} />
  {name}
</C.Type>
</>
    
  ) : (
<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
    <span className="font-medium">Oops,</span> could not find the type of this Pokemon
  </div> 
  );
};
