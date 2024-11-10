import { name, cardNumber, cvc, month, year } from './envs';

Cypress.Commands.add('realizaCheckoutComSucesso', () => {
  cy.visit('/products');
  cy.get('a[data-product-id="4"]').contains('Add to cart').click();
  cy.get('.modal-content').contains('View Cart').click();
  cy.url().should('include', '/view_cart');
  cy.get('a[class="btn btn-default check_out"]').contains('Proceed To Checkout').click();
  cy.get('.form-control').type('Nenhuma observação');
  cy.get('a[class="btn btn-default check_out"]').contains('Place Order').click();
  cy.url().should('include', '/payment');
  cy.get('input[data-qa="name-on-card"]').type(name);
  cy.get('input[data-qa="card-number"]').type(cardNumber);
  cy.get('input[data-qa="cvc"]').type(cvc);
  cy.get('input[data-qa="expiry-month"]').type(month);
  cy.get('input[data-qa="expiry-year"]').type(year);
  cy.get('[data-qa="pay-button"]').click();
  cy.get('p').should('be.visible').and('contain', 'Congratulations! Your order has been confirmed!')
  cy.get('[data-qa="continue-button"]').click();
});