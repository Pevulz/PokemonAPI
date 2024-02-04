import Header from "./components/Header/Header";
import Info from "./components/Pokemon_Info/Info";
import "./App.css";
import SearchPage from "./components/SearchPokemon/SearchPage";

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon/";

  return (
    <>
      <Header></Header>

      <SearchPage API_URL={API_URL}></SearchPage>
    </>
  );
}

export default App;
