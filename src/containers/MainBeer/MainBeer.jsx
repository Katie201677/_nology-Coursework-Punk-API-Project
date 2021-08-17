import React from 'react';
import NotFound from "../../components/NotFound";
import styles from "./MainBeer.module.scss";

import CardList from "../../components/CardList"

const MainBeer = (props) => {
  const { beers } = props;
  
  const contentJsx = beers.length
    ? (<CardList className={styles.list} beers={beers}/>)
    : (<NotFound className={styles.notFound} text="Sorry, no beers." />
  );

  return (
    <div>
      {contentJsx}
    </div>
  )
}

export default MainBeer
