describe('Dashboard', () => {

  it('it should display the data provided as reservation cards', () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    cy.intercept('GET', `${url}`, [
      {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
      },
    ])
    cy.visit('http://localhost:3000/')
      .get('h1').contains('Turing')
      .get('article').contains('Christie')
  });

  it('it should display the text as you type into the forms', () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    cy.intercept('GET', `${url}`, [])
    cy.visit('http://localhost:3000/')
      .get('input[name=name]').type('Christie')
  });

  it('it should display a new card when a reservation is added', () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    cy.intercept('GET', `${url}`, [])
    cy.visit('http://localhost:3000/')
      .get('input[name=name]').type('Cooler Robby')
      .get('input[name=date]').type('01/01')
      .get('input[name=time]').type('7:00')
      .get('input[name=number]').type('2')
      .get('button').click()
      .get('article').contains('Cooler Robby')
  });

});
