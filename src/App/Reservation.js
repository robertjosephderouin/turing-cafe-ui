import React from 'react';
import Card from './Card';

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
    <div>
      {reservationCards}
    </div>
  )
}

export default Reservation;
