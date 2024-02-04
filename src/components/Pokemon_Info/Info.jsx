import React, { useEffect, useState } from "react";
import "./Info.css";
import axios from "axios";
import Card from "./Card";

function Info() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  async function fetchData() {
    //load everything
    setLoading(true);
    //fetch api
    const result = await axios.get(url);
    //setting urls
    setNextUrl(result.data.next);
    setPrevUrl(result.data.previous);
    //done loading
    getPokemonData(result.data.results);
    setLoading(false);
  }

  //access pokemon data from url
  async function getPokemonData(result) {
    //iterate thro results
    result.map(async (item) => {
      //fetch pokemon's url
      const pokeData = await axios.get(item.url);
      //add to old data
      setPokemonData((oldState) => {
        oldState = [...oldState, pokeData.data];
        //sort by id
        oldState.sort((a, b) => a.id - b.id);
        return oldState;
      });
    });
  }

  //get data everytime url changes
  useEffect(() => {
    fetchData();
  }, [url]);

  function previousPage() {
    if (prevUrl != null) {
      //reset list
      setPokemonData([]);
      setUrl(prevUrl);
    }
  }

  function nextPage() {
    if (nextUrl != null) {
      //reset list
      setPokemonData([]);
      setUrl(nextUrl);
    }
  }

  return (
    <>
      <div className="container">
        {pokemonData.map((pokemonData) => (
          <Card pokemon={pokemonData} loading={loading}></Card>
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
}

export default Info;
