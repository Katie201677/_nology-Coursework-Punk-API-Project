import React from 'react';
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  
  const { beer } = props;
  
  return (
    <div className={styles.cardFront}>
      <img className={styles.img}  src={beer.image_url} alt="image of beer" />
      <div className={styles.detailsContainer}>
        <h1 className={styles.h1}>{beer.name}</h1>
        <p>{`${beer.abv}%`}</p>
        <p>Click for info</p>
      </div>
    </div>
  )
}

export default CardFront
