import Ed11y from './lib/editoria11y.min.js'

Cypress.Commands.add('checkEd11y', () => {
  const ed11y =  new Ed11y()
  Cypress.log(ed11y)
})