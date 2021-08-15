import React, { useState } from 'react';
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {

  const { beer } = props;
  const [ isFlipped, setIsFlipped ] = useState(false);
  
  const flipCard = isFlipped ? styles.flipped : "";
  
  return (
    <section 
      className={`${styles.card} ${flipCard}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.cardSide}>
        <CardFront beer={beer}/>
      </div>
      <div className={`${styles.cardBack} ${styles.cardSide}`}>
        <CardBack beer={beer}/>
      </div>
    </section>
  )
}

export default Card
