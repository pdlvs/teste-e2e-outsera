import { usuario, senha} from './envs';

Cypress.Commands.add('acessaPaginaDeLogin', () => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(usuario);
  cy.get('input[data-qa="login-password"]').type(senha);
  cy.get('button[data-qa="login-button"]').click();
  cy.contains('Logout').should('be.visible');
});