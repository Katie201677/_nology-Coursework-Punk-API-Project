import React from 'react';
import styles from "./NotFound.module.scss";

const NotFound = (props) => {
  const { text } = props;
  
  return (
    <div className={styles.notFound}>
      <p>{text}</p>
    </div>
  )
}

export default NotFound
