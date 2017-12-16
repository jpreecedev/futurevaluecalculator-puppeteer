describe('<FutureValueCalculator />', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('should apply the default state', function () {
    cy
      .setPricePaid(120000)

    cy
      .get('#mortgageLength')
      .should('have.value', '25')

    cy
      .get('#expectedAnnualIncrease')
      .should('have.value', '5')
  })

  it('should display the default summary', function () {
    cy
      .get('.summary')
      .contains('In 25 years the property will be worth around £406362.59 assuming 5% annual growth.')
  })

  it('should show the correct summary when adjusting the price paid to £150000', function () {
    cy
      .setPricePaid(150000)

    cy
      .get('.summary')
      .contains('In 25 years the property will be worth around £507953.24 assuming 5% annual growth.')
  })

  it('should show the correct summary when adjusting the mortgage length to 30 years', function () {
    cy
      .get('#mortgageLength')
      .clear()
      .type('30')
      .should('have.value', '30')

    cy
      .get('.summary')
      .contains('In 30 years the property will be worth around £518633.09 assuming 5% annual growth.')
  })

  it('should show the correct summary when adjusting the expected annual increase to 10%', function () {
    cy
      .get('#expectedAnnualIncrease')
      .clear()
      .type('10')
      .should('have.value', '10')

    cy
      .get('.summary')
      .contains('In 25 years the property will be worth around £1300164.71 assuming 10% annual growth.')
  })
})
