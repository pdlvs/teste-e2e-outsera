import { user, password } from './envs';

Cypress.Commands.add('acessaPaginaDeLogin', () => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(user);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
  cy.contains('Logout').should('be.visible');
});

Cypress.Commands.add('realizaLogout', () => {
  cy.visit('/');
  cy.get('a[href="/logout"]').contains('Logout').click();
  cy.url().should('include', '/login');
});