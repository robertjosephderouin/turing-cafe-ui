import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
  }

  render() {
    return (
      <form>

        <input className='inputs'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input className='inputs'
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input className='inputs'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input className='inputs'
          type='text'
          placeholder='number'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitReservation(event)} className='inputs'>SUBMIT</button>

      </form>
    )
  }
}

export default Form;
