import './loginCommands';
import './checkoutCommands';

declare global {
  namespace Cypress {
    interface Chainable {
      acessaPaginaDeLogin(): void;
      realizaCheckoutComSucesso(): void;
      realizaLogout(): void;
    }
  }
}