describe('filter select', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should open the dropdown and display all filter options', () => {
    cy.contains('Filter Period').should('exist');

    cy.get('[role="cy-button"]').click();

    cy.contains('Last 1 day').should('be.visible');
    cy.contains('Last 7 days').should('be.visible');
    cy.contains('Last 30 days').should('be.visible');
  });
});
