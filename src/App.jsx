import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import { getBeers } from "../src/services/beers.service";
import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";
import Heading from "./components/Heading";

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
      <Heading headingText="Fancy a Beer?"/>
      <section className={styles.content}>
        <NavBar />
        <MainBeer beers={beers}/>
      </section>
    </div>
  );
}

export default App;
