import React from 'react';

import CardList from "../../components/CardList"

const MainBeer = (props) => {
  const { beers } = props;

  return (
    <div>
      <CardList beers={beers}/>
    </div>
  )
}

export default MainBeer
