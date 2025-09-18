import '../../src/index.js'

describe('Should run the editorilly feature.', () => {
  it('Init the ed11y command',  () => {
    cy.checkEd11y()
  })
})