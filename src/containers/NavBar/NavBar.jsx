import React from 'react';
import styles from "./NavBar.module.scss";
import FiltersList from "../../components/FiltersList";

import SearchBar from "../../components/SearchBar";

const NavBar = (props) => {
  
  const { updateSearchTerm, updateFilters, filters } = props;
  
  return (
    <nav className={styles.nav}>
      <SearchBar placeholder="Search for beer" updateSearchTerm={updateSearchTerm}/>
      <FiltersList updateFilters={updateFilters} filters={filters}/>
    </nav>
  )
}

export default NavBar
