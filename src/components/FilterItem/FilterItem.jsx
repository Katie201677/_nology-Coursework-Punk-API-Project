import React from 'react';
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { id, boxName, value, checked, onChange } = props;
  
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={() => onChange(+id)}
      />  
    <span className={styles.label}>{boxName}</span>
    </div>
  )
}

export default FilterItem
