import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initial_URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    const fetchPokemonDate = async () => {
      let res = await getAllPokemon(initial_URL);
      console.log(res);
    };
    fetchPokemonDate();
  }, []);
  return <div className="App"></div>;
}

export default App;
