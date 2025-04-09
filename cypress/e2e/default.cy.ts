describe('template spec', () => {
  it('renders the title on the screen', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=cy-title]').should('exist');
    cy.get('[data-testid=cy-title]').should('contain', 'Most Viewed Articles');
  });
});