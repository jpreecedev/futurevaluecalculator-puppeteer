
Cypress.Commands.add('setPricePaid', pricePaid => {
  cy
    .get('#pricePaid')
    .clear()
    .type(pricePaid)
    .should('have.value', pricePaid.toString())
})
