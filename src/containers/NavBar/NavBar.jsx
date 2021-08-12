import React from 'react';
import styles from "./NavBar.module.scss";

import SearchBar from "../../components/SearchBar";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <SearchBar placeholder="Search for beer"/>
    </nav>
  )
}

export default NavBar
