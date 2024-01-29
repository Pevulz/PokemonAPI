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
    getPokemonData(result);

    setLoading(false);
  }

  async function getPokemonData(result) {
    setPokemonData(result.data.results);
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
