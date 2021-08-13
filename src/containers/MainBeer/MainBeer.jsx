import React from 'react';
import NotFound from "../../components/NotFound";

import CardList from "../../components/CardList"

const MainBeer = (props) => {
  const { beers } = props;
  
  const contentJsx = beers.length
    ? (<CardList beers={beers}/>)
    : (<NotFound text="Sorry, no beers" />
  );

  return (
    <div>
      {contentJsx}
    </div>
  )
}

export default MainBeer
