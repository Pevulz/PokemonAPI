import React, { useState } from "react";
import "./Header.css";
import Info from "../Pokemon_Info/Info";
import SearchPage from "../SearchPokemon/SearchPage";

function Header(tabs) {
  const API_URL = "https://pokeapi.co/api/v2/pokemon/";
  const [tab, setTab] = useState(<Info />);

  function infoTab() {
    setTab(<Info />);
    return <Info></Info>;
  }

  function searchTab() {
    setTab(<SearchPage API_URL={API_URL} />);
    return <SearchPage API_URL={API_URL}></SearchPage>;
  }

  return (
    <>
      <div className="navContainer">
        <button onClick={infoTab}>Info</button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"></img>
        <button onClick={searchTab}>Search</button>
      </div>
      <div>{tab}</div>
    </>
  );
}

export default Header;
