import React from 'react';
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  
  const { beer } = props;
  
  return (
    <div className={styles.cardFront}>
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
      <p>{`I am ${beer.abv}%`}</p>
      <p>Click to learn what food I go with!</p>
    </div>
  )
}

export default CardFront
