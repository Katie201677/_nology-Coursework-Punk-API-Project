import React from 'react';
import FilterItem from "../FilterItem";

const FiltersList = () => {
  
  return (
    <form>
      <FilterItem 
        id="ABV"
        boxName="High ABV"
        value="High ABV"
      />
      <FilterItem 
        id="range"
        boxName="Class Range"
        value="Classic Range"
      />
      <FilterItem 
        id="Acidic"
        boxName="Acidic (ph < 4)"
        value="Acidic (ph < 4)"
      />
    </form>
  )
}

export default FiltersList
