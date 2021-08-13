import React from 'react';
import styles from "./Card.module.scss";

const Card = (props) => {
  const { beer } = props;
  
  return (
    <div className={styles.card}>
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
    </div>
  )
}

export default Card
