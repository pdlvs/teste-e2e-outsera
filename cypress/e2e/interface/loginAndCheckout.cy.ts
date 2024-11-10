describe('Acessa página de login', () => {

  it('Login com usuário e senha válidas', () => {
    cy.acessaPaginaDeLogin();
  });
});

describe('Adiciona produto no carrinho e realiza checkout', () => {

  it('Seleciona produto e finaliza compra', () => {
    cy.realizaCheckoutComSucesso();
  });
});

describe('Realiza logout após finalizar compra', () => {

  it('Realiza logout', () => {
    cy.realizaLogout();
  })

})
