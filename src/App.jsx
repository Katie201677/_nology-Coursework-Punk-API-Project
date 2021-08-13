import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import { getBeers } from "../src/services/beers.service";
import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";
import Heading from "./components/Heading";

const App = () => {
  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  // const [ isABVChecked, setIsABVChecked ] = useState(false);
  const [ filters, setFilters ] = useState([false, false, false]);
  // const [ isClassicChecked, setIsClassicChecked ] = useState(false);

  const updateSearchTerm = (input) => {
    let APIParameter;
    if (input === "") {
      APIParameter = "";
    } else {
      APIParameter = `?beer_name=${input}`
    }
    setSearchTerm(APIParameter);
  }
  
  const updateBeers = async (input) => {
    const updatedBeers = await getBeers(input);
    setBeers(updatedBeers);
  }
  
  useEffect(() => {
    updateBeers(searchTerm)
  }, [searchTerm])

  // const updateABV = () => {
  //   setIsABVChecked(!isABVChecked);
  // }
    
  // display all beers on the page initially:
  useEffect(() => {
    updateBeers("");
  }, [])

  const updateFilters = (filterNo) => {
    setFilters([
      ...filters.slice(0, filterNo),
      !filters[filterNo],
      ...filters.slice(filterNo + 1),
    ]);  
  }


  // useEffect(() => {
  //   if (isABVChecked) {
  //     const filteredBeers = beers.filter(beer => beer.abv > 6);
  //     setBeers(filteredBeers);
  //   }
  //   else {
  //     updateBeers(searchTerm);
  //   }
  // }, [isABVChecked]);
  
  return (
    <div className={styles.main}>
      <Heading headingText="Fancy a Beer?"/>
      <section className={styles.content}>
        <NavBar 
          updateSearchTerm={updateSearchTerm} 
          updateFilters={updateFilters}
          filters={filters}
        />
        <MainBeer beers={beers}/>
      </section>
    </div>
  );
}

export default App;
