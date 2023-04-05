import { useEffect, useRef, useState, MutableRefObject} from "react";
import { Header } from 'app/component/Layout/Header';
import { Pokedex } from "app/component/Pokedex";
import { fetchPokemonList } from "app/utils/api/fetchPokemonList";
import { Pokemon } from "app/utils/types/Pokemon";


function App() {
  const [modal, setModal] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  // const searchBarRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;


  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemonList(await fetchPokemonList(1));
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    modal
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "initial");
  }, [modal]);

  useEffect(() => {
    setError(false);
  }, [pokemonList]);
  return (
    <>
      <Header />
      <Pokedex
        setModal={setModal}
        setPokemonData={setPokemonData}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        error={error}
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
        disabledButton={disabledButton}
      />
    </>
  );
}

export default App;
