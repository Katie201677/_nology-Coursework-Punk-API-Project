import React from 'react';
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  
  const { beer } = props;
  
  return (
    <div>
      <div className={styles.cardBack}>
        <h1 className={styles.h1}>{beer.name}</h1>
        <p className={styles.firstBrewed}>{`First brewed in ${beer.first_brewed}`}</p>
        <blockquote className={styles.description}>
        {beer.description}
        </blockquote>
    </div>
    </div>
  )
}

export default CardBack
