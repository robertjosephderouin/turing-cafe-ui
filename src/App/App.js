import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form>

            <input
              type='text'
              placeholder='Name'
              name='name'
              value={this.state.name}
              onChange={event => this.handleChange(event)}
            />

            <input
              type='text'
              placeholder='Date'
              name='date'
              value={this.state.date}
              onChange={event => this.handleChange(event)}
            />

            <input
              type='text'
              placeholder='Time'
              name='time'
              value={this.state.time}
              onChange={event => this.handleChange(event)}
            />

            <input
              type='text'
              placeholder='number'
              name='number'
              value={this.state.number}
              onChange={event => this.handleChange(event)}
            />

            <button>SUBMIT</button>
            
          </form>
        </div>
        <div className='resy-container'>
          <Reservation reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
