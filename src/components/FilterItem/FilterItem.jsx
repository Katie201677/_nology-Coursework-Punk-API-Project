import React from 'react';

const FilterItem = (props) => {
  const { id, boxName, value, checked, onChange } = props;
  
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={boxName}
        value={value}
        checked={checked}
        onChange={() => onChange(+id)}
      />  
    {boxName}
    </div>
  )
}

export default FilterItem
