import { mockArticle } from "../../src/__mocks__/mock-article";

describe('ArticleList', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/viewed/1.json*', {
      statusCode: 200,
      body: mockArticle,
    }).as('getArticles');

    cy.visit('http://localhost:5173');
  });

  it('should show loader and then render articles on success', () => {
    cy.get('[role="loader"]').should('exist');

    cy.wait('@getArticles');

    cy.contains('Wall Street').should('be.visible');
    cy.contains('Business').should('be.visible');
    cy.contains('Copyright (c) 2022 The New York Times Company. All Rights Reserved.').should('be.visible');
  });

  it('should display articles when API call is successful and check for unique elements', () => {
    cy.wait('@getArticles');

    cy.get('[data-testid="article-card"]').should('have.length.greaterThan', 1);

    cy.contains('Wall Street').should('be.visible');
    cy.contains('Your Life Will').should('be.visible');
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('should display an error message if the API call fails', () => {
    cy.intercept('GET', '**/viewed/1.json*', {
      statusCode: 500,
    }).as('getArticlesError');

    cy.wait(7000);
    cy.wait('@getArticlesError');

    cy.contains("Error: An unexpected error occurred").should('be.visible');
  });

  it('should render article with a clickable link that opens in a new tab', () => {
    cy.contains('Wall Street')
      .should('have.attr', 'href')
      .and('include', 'https://');

    cy.contains('Wall Street')
      .should('have.attr', 'target', '_blank');
  });
});
