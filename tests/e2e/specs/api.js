const getResults = (key) => cy.request(`https://rickandmortyapi.com/api/character/?name=${key}`).its('body')

describe('Api', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();
  });

  it('Api should return results > 0', () => {
    getResults('Rick')
    .its('results')
    .its('length')
    .should('be.gt', 0)
  });
});