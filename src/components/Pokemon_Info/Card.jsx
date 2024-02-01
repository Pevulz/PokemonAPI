import React from "react";
import { useState } from "react";
import "./Card.css";

function Card({ pokemon, loading }) {
  const [showDetails, setShowDetail] = useState(false);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div
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
                <h1>{pokemon.name}</h1>
                {/*show pokemon type*/}
                <p>
                  {pokemon.types.map((data) => (
                    <p>{data.type.name}</p>
                  ))}
                </p>
                <p>
                  {pokemon.stats.map((data) => (
                    <p>{data.stat.name}: </p>
                  ))}
                </p>
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
