import React from 'react';

const Card = ({ id, name, date, time, number }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
}

export default Card;
