import React from "react";
import "./Card.css";

function Card({ pokemon, loading }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <h1>
              {pokemon.id}) {pokemon.name}
            </h1>
            <img src={pokemon.sprites.front_default}></img>
          </div>
        ))
      )}
    </>
  );
}

export default Card;
