import './loginCommands';

declare global {
    namespace Cypress {
      interface Chainable {
        acessaPaginaDeLogin(): void;
      }
    }
  }