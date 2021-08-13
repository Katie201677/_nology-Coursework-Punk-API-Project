import React from 'react';

import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
  const { beers } = props;
  

  const getCardJsx = (beer) => (
    <Card beer={beer} key={beer.id} className={styles.card} />
  );

  return (
    <section className={styles.cardDisplay}>
      {beers.map(beer => getCardJsx(beer))}
    </section>
  )
}

export default CardList
