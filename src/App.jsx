import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import { getBeers, getInitialBeers } from "../src/services/beers.service";
import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";
import Heading from "./components/Heading";
import NotFound from "./components/NotFound";

const App = () => {
  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  const updateBeers = async (searchTerm) => {
    const updatedBeers = await getBeers(searchTerm);
    setBeers(updatedBeers);
  }

  const updateSearchTerm = (input) => { 
    if (input === "") {
      setSearchTerm("");
    } else {
      setSearchTerm(`?beer_name=${input}`)
    } 
  }
    
  // display all beers on the page initially:
  useEffect(() => {
    updateBeers("");
  }, [])

  //update beers displayed when search term entered
  useEffect(() => {
    updateBeers(searchTerm)
  }, [searchTerm]);
  
  return (
    <div className={styles.main}>
      <Heading headingText="Fancy a Beer?"/>
      <section className={styles.content}>
        <NavBar updateSearchTerm={updateSearchTerm}/>
        <MainBeer beers={beers}/>
      </section>
    </div>
  );
}

export default App;
