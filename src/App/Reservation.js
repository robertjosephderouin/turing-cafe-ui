import React from 'react';
import Card from './Card';
import './Reservation.css';

const Reservation = ({reservations}) => {

  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })

  return (
    <div className='reservation-container'>
      {reservationCards}
    </div>
  )
}

export default Reservation;
