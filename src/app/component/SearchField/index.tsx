import { Pokemon } from "app/utils/types/Pokemon";
import { fetchPokemon } from "app/utils/api/fetchPokemon";
import { SyntheticEvent, useState } from "react";
import * as C from "./style";
import { ReactComponent as SearchIcon } from "app/assets/icon-search.svg";

type SearchFieldProps = {
    setPokemonList: (data: Pokemon[]) => void;
    setError: (value: boolean) => void;
    setLoading: (value: boolean) => void;
  };
  
  export const SearchField = (props: SearchFieldProps) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
      
        props.setLoading(true);
        const requestPokemon = await fetchPokemon(inputValue.toLowerCase());
      
        if (requestPokemon.response && requestPokemon.response.ok) {
          const pokemon = requestPokemon.data;
          if (pokemon) {
            props.setPokemonList([pokemon]);
          } else {
            props.setError(true);
          }
        } else {
          props.setError(requestPokemon.error);
        }
      
        props.setLoading(false);
        setInputValue("");
      };
      
      
  
    return (
      <C.Container onSubmit={handleSubmit}>
        <C.InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Pokemon Name"
          required
        />
        <C.SearchButton>
          <SearchIcon />
        </C.SearchButton>
      </C.Container>
    );
  };