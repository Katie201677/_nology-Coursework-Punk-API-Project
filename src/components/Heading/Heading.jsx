import React from 'react';
import styles from "./Heading.module.scss";

const Heading = (props) => {
  const { headingText } = props;
  
  return (
    <h1 className={styles.heading}>
      {headingText}
    </h1>
  )
}

export default Heading
