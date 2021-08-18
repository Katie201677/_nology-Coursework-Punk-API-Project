import React, { useState, useEffect } from "react";

import styles from './App.module.scss';

import { getBeers } from "../src/services/beers.service";
import { extractYear } from "../src/services/extractYear.service";
import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";
import Heading from "./components/Heading";

const App = () => {
  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ filters, setFilters ] = useState([false, false, false]);
  const [ filteredBeers, setFilteredBeers ] = useState([]);

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

  const updateFilters = (filterNo) => {
    setFilters([
      ...filters.slice(0, filterNo),
      !filters[filterNo],
      ...filters.slice(filterNo + 1),
    ]);  
  }

  const filterBeers = (filters, beersToFilter) => {
    let filteredBeerArray = [...beersToFilter];
    if(filters[0]) {
      filteredBeerArray = filteredBeerArray.filter(beer => beer.abv > 6);
    }
    if(filters[1]) {
      filteredBeerArray = filteredBeerArray.filter(beer => {
        const year = extractYear(beer.first_brewed);
        return year < 2010;
      })
    }
    if(filters[2]) {
      filteredBeerArray = filteredBeerArray.filter(beer => beer.ph < 4);
    }
    console.log(filteredBeerArray);
    return filteredBeerArray; 
  }
    
  // display all beers on the page initially:
  useEffect(() => {
    updateBeers("");
  }, []);

  useEffect(() => {
    updateBeers(searchTerm)
  }, [searchTerm]);
  
  useEffect(() => {
    setFilteredBeers(filterBeers(filters, beers))
  }, [beers, filters]);

  return (
    <div className={styles.main}>
      <Heading headingText="Fancy a Beer?"/>
      <section className={styles.content}>
        <NavBar 
          updateSearchTerm={updateSearchTerm} 
          updateFilters={updateFilters}
          filters={filters}
        />
        <MainBeer beers={filteredBeers}/>
      </section>
    </div>
  );
}

export default App;
