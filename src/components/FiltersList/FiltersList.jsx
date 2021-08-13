import React from 'react';
import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  
  const { updateABV, isABVChecked } = props;

  return (
    <form>
      <FilterItem 
        id="ABV"
        boxName="High ABV"
        value="High ABV"
        isABVChecked={isABVChecked}
        updateABV={updateABV}
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
