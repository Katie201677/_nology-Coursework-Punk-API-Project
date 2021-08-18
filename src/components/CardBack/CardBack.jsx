import React from 'react';
import styles from "./CardBack.module.scss";
import { extractYear } from "../../services/extractYear.service";

const CardBack = (props) => {
  
  const { beer } = props;

  const year = extractYear(beer.first_brewed);
  
  return (
    <div>
      <div className={styles.cardBack}>
        <h1 className={styles.h1}>{beer.name}</h1>
        <p className={styles.firstBrewed}>{`First brewed in ${year}`}</p>
        <blockquote className={styles.description}>
        {beer.description}
        </blockquote>
    </div>
    </div>
  )
}

export default CardBack
