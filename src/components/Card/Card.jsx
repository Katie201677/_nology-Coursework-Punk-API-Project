import React from 'react'

const Card = (props) => {
  const { beer } = props;
  
  return (
    <div>
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
    </div>
  )
}

export default Card
