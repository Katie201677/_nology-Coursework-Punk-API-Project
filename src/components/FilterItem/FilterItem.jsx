import React from 'react';

const FilterItem = (props) => {
  const { id, boxName, value } = props;
  
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={boxName}
        value={value}
      />  
    {boxName}
    </div>
  )
}

export default FilterItem
