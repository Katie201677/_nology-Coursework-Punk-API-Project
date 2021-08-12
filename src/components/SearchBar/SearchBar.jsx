import React from 'react';
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  
  const { placeholder } = props;
  
  return (
    <form className={styles.form}>
      <input 
        className={styles.input}
        type="text"
        placeholder={placeholder}
      >
      </input>
    </form>
  )
}

export default SearchBar
