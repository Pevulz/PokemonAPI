import React, { useEffect, useRef, useState } from "react";
import "./Info.css";
import Card from "./Card";

function Info() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch data once on mount
    const link = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(link).then((response) =>
      response.json().then((data) => setCardData(data))
    );
  }, []);

  console.log(cardData);

  function searchPokemon(e) {
    e.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    //Handle API call
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error))
    );
    console.log(pokemonData);
  }

  return (
    <>
      <div className="container">
        <div className="leftContent">
          <form className="search" onSubmit={searchPokemon}>
            <input
              type="text"
              name="pokemon"
              placeholder="Pokemon"
              onChange={(e) => setPokemon(e.target.value)}
            ></input>
            <button type="submit">Search</button>
          </form>

          <div className="dataDisplay">
            {JSON.stringify(pokemonData) != "{}" ? (
              <>
                <p>{pokemonData.name}</p>
                <img src={`${pokemonData.sprites.front_default}`}></img>
              </>
            ) : (
              <p>Nothing Here</p>
            )}
          </div>
        </div>
        <div className="rightContent">
          {/*render data first then map*/}
          {cardData &&
            cardData.results.map((cardData) => (
              <div key={cardData.name}>
                <Card data={cardData} loading={loading}></Card>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Info;
