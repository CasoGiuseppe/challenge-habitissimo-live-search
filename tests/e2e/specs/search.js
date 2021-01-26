describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();
  });

  it('Should search has results', () => {
    cy.route('GET', 'https://rickandmortyapi.com/api/character/?name=Rick', 'fixture:search/results.json').as(
      'getLiveSearchResults'
    )

    // ACTION: get input and type search request
    cy.get('[data-cy=input]')
      .type('Rick')

    cy.wait('@getLiveSearchResults', { requestTimeout: 30000 }).then((xhr) => {
      // ASSERTION: is Object -> TRUE
      // ASSERTION: have property results -> TRUE
      // ASSERTION: have property results length > 0
      expect(xhr.response.body).to.be.a('object')
      expect(xhr.response.body).to.have.property('results')
      expect(xhr.response.body.results.length).to.be.greaterThan(0)
      return xhr.response.body
    })

    // ASSERTION: store.results length === 1
    cy
      .vuex()
      .its('state.search.results')
      .should('have.length', 1);

    // ASSERTION: store.results length === 1
    cy
      .vuex()
      .its('state.search.results')
      .should('have.length', 1);

    // ASSERTION: panel visibility -> TRUE
    cy.get('[data-cy=data-list]')
      .should('be.visible')

    // ACTION: get data list, focus and click first <li> element
    // get and compare location
    cy.get('[data-cy=data-list] li')
      .focus()
      .click()
      .location()
      .should((loc) => {
        // ASSERTION: path === '/detail/1' -> TRUE
        expect(loc.pathname).to.eq('/detail/1')
      })
  })
});