describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();
  });

  it('Store should have a correct cosmetic values.', () => {
    cy.vuex().its('state.cosmetic').should('deep.equal', {
      extraPanel: false
    });
  });

  it('Store should have a correct search values.', () => {
    cy.vuex().its('state.search').should('deep.equal', {
      key: null,
      visibility: null,
      loading: false,
      error: false,
      selected: null,
      results: []
    });
  });
});
