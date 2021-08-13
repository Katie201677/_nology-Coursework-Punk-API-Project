import React from 'react';
import styles from "./NavBar.module.scss";
import FiltersList from "../../components/FiltersList";

import SearchBar from "../../components/SearchBar";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <SearchBar placeholder="Search for beer"/>
      <FiltersList />
    </nav>
  )
}

export default NavBar
