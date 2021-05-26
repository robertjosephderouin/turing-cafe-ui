import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} PM</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;
