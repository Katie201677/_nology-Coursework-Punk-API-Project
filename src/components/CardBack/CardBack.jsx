import React from 'react';
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  
  const { beer } = props;
  
  return (
    <div>
      <div className={styles.cardBack}>
        <h1>{beer.name}</h1>
        <p>{`First brewed in ${beer.first_brewed}`}</p>
    </div>
    </div>
  )
}

export default CardBack
