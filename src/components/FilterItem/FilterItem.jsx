import React from 'react';

const FilterItem = (props) => {
  const { id, boxName, value, isABVCHhecked, updateABV } = props;
  
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={boxName}
        value={value}
        checked={isABVCHhecked}
        onChange={updateABV}
      />  
    {boxName}
    </div>
  )
}

export default FilterItem
