import axios from "axios";
import React, { useRef, useState } from "react";

function SearchPage({ API_URL }) {
  const searchRef = useRef(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(result);

  function searchPokemon(e) {
    e.preventDefault();
    setLoading(true);
    fetchData();
    setLoading(false);
  }

  async function fetchData() {
    setResult(
      await axios
        .get(`${API_URL}${searchRef.current.value}`)
        .catch(function (error) {
          console.log(error);
        })
    );
  }

  function showResult() {
    if (result == null) {
      return <h1>This is not a pokemon</h1>;
    } else {
      return (
        <>
          <div>
            <h1>{result.data.name}</h1>
            <img
              src={result.data.sprites.other.dream_world.front_default}
            ></img>
            {result.data.types.map((data) => (
              <p>{data.type.name}</p>
            ))}
            {result.data.stats.map((data) => (
              <p>
                {data.stat.name}: {data.base_stat}
              </p>
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <>
      <form onSubmit={searchPokemon}>
        <input
          ref={searchRef}
          type="text"
          name="pokemon"
          placeholder="Search"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>{loading ? <p>Loading...</p> : showResult()}</div>
    </>
  );
}

export default SearchPage;
