import React, { useEffect, useState } from "react";
import "./Info.css";
import axios from "axios";
import Card from "./Card";

function TestingInfo() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  async function fetchData() {
    //load everything
    setLoading(true);
    //fetch api
    const result = await axios.get(url);

    //setting urls
    setNextUrl(result.next);
    setPrevUrl(result.previous);
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
        oldState.sort();
        return oldState;
      });
    });
  }

  //get data everytime url changes
  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="leftContent"></div>
        <div className="rightContent">
          <Card pokemon={pokemonData} loading={loading}></Card>
        </div>
      </div>
    </>
  );
}

export default TestingInfo;
