/// <reference types="cypress" />

describe('Teste de Cadastro e Login', () => {
  it('Cadastro e Acesso', () => {
    cy.visit('http://localhost:8081'); 
    cy.wait(600); 

    cy.contains('Cadastrar', { timeout: 5000 }).should('be.visible').click();
    cy.get('input[placeholder="Escolha seu melhor E-mail"]').type('carol@gmail.com');
    cy.get('input[placeholder="Escolha sua melhor Senha"]').type('Theo1234!');
    cy.wait(500);

    cy.contains('Criar Conta', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(1200);

    cy.window().then((window) => {
      window.localStorage.setItem('userEmail', 'carol@gmail.com');
      window.localStorage.setItem('userPassword', 'Theo1234!');
      expect(window.localStorage.getItem('userEmail')).to.eq('carol@gmail.com');
      expect(window.localStorage.getItem('userPassword')).to.eq('Theo1234!');
    });
    cy.wait(1200);
  
    cy.get('input[placeholder="Digite seu e-mail"]').type('carol@gmail.com');
    cy.get('input[placeholder="Digite sua senha"]').type('Theo1234!');
  
    cy.contains('Entrar').should('be.visible').click({ force: true });
    cy.wait(1000);
   
  });
});