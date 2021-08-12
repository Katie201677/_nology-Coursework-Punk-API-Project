import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import { getBeers } from "../src/services/beers.service";
import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";

const App = () => {
  const [ beers, setBeers ] = useState([]);

  const updateBeers = async () => {
    const updatedBeers = await getBeers();
    setBeers(updatedBeers);
  }

  useEffect(() => {
    updateBeers();
    console.log(beers);
  }, [])
  
  return (
    <div className={styles.main}>
      <NavBar />
      <MainBeer beers={beers}/>
    </div>
  );
}

export default App;
