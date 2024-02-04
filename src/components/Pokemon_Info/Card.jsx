import React from "react";
import { useState } from "react";
import "./Card.css";

function Card({ pokemon, loading }) {
  const [showDetails, setShowDetail] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <div className="card">
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <>
          <div
            key={pokemon.id}
            className="card"
            onMouseEnter={() => {
              setShowDetail(true);
            }}
            onMouseLeave={() => {
              setShowDetail(false);
            }}
          >
            {showDetails ? (
              <div className="card-back">
                <h1 className="pokemon-name">{pokemon.name}</h1>
                {/*show pokemon type*/}
                <div className="pokemon-type">
                  {pokemon.types.map((data) => (
                    <p>{data.type.name}</p>
                  ))}
                </div>
                <div className="pokemon-stats">
                  {pokemon.stats.map((data) => (
                    <p>
                      {data.stat.name}: {data.base_stat}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card-front">
                <h1>
                  {pokemon.id}) {pokemon.name}
                </h1>
                <img src={pokemon.sprites.front_default}></img>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Card;
