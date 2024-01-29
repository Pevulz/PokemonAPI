import React from "react";
import "./Card.css";

function Card({ pokemon, loading }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((pokemon) => (
          <div key={pokemon.name} className="card">
            {pokemon.name}
          </div>
        ))
      )}
    </>
  );
}

export default Card;
