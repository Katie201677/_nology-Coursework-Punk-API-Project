import React from 'react';
import FilterItem from "../FilterItem";
import styles from "./FiltersList.module.scss";

const FiltersList = (props) => {
  
  const { filters, updateFilters } = props;

  return (
    <form className={styles.form}>
      <FilterItem 
        id="0"
        boxName="High ABV"
        value="High ABV"
        checked={filters[0]}
        onChange={updateFilters}
      />
      <FilterItem 
        id="1"
        boxName="Classic Range"
        value="Classic Range"
        checked={filters[1]}
        onChange={updateFilters}
      />
      <FilterItem 
        id="2"
        boxName="Acidic (ph < 4)"
        value="Acidic (ph < 4)"
        checked={filters[2]}
        onChange={updateFilters}
      />
    </form>
  )
}

export default FiltersList
