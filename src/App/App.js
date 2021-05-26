import React, { Component } from 'react';
import Form from './Form';
import Reservation from './Reservation';
import './App.css';
import { getReservations } from './apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount = () => {
  getReservations()
    .then(data => {
      this.setState({ reservations: data })
    })
    .catch(() => this.setState({ error: 'Something went wrong'}))
}

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservation reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
