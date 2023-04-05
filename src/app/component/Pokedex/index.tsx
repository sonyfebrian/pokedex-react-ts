import UsePagination from "../Pagination";
import { PokemonCard } from "../PokemonCard";
import { Pokemon } from "app/utils/types/Pokemon";

type PokedexProps = {
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    pokemonList: Pokemon[];
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    error: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    page: number;
    setPage: (value: number) => void;
    showPagination: boolean;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    searchBarRef: React.MutableRefObject<HTMLDivElement>;
  };

  export const Pokedex = (props: PokedexProps) => {
    if (props.error) return <>error</>;
    else
      return (
        <>
          <div >
            {props.loading ? (
              <>loading</>
            ) : (
              <div className="container px-5 py-5 ">
                <div className="flex flex-wrap -m-4">{props.pokemonList.map((pokemon) => (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    setModal={props.setModal}
                    setPokemonData={props.setPokemonData}
                  />
                ))}</div>
                
              </div>
            )}
            {props.pokemonList.length > 1 &&
              props.loading === false &&
              props.showPagination === true && (
                <UsePagination
                  setPokemonList={props.setPokemonList}
                  setLoading={props.setLoading}
                  searchBarRef={props.searchBarRef}
                  page={props.page}
                  setPage={props.setPage}
                />
              )}
         
          </div>
        </>
      );
  };