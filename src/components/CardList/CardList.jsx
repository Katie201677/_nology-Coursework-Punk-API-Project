import React from 'react';

import Card from "../Card";

const CardList = (props) => {
  const { beers } = props;
  

  const getCardJsx = (beer) => (
    <div>
      <Card beer={beer} />
    </div>
  );

  return (
    <section>{beers.map(beer => getCardJsx(beer))}</section>
  )
}

export default CardList
