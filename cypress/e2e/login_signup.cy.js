/// <reference types="cypress" />

describe('Teste de Cadastro e Login', () => {
  beforeEach(() => {
    // Inicializa o app antes de cada teste
    cy.visit('http://localhost:8081'); // Substitua pela URL correta do seu app
    cy.wait(1000);
  });

  it('Deve realizar o cadastro', () => {
    // Passo 1: Está na tela de login
    // Clica no botão de "Cadastrar"
    cy.contains('Cadastrar').click();

    // Passo 2: Preenche os campos de cadastro
    cy.get('input[placeholder="Escolha seu melhor E-mail"]').type('carol@gmail.com');
    cy.get('input[placeholder="Escolha sua melhor Senha"]').type('Theo1234!');
    cy.wait(500);
    cy.get('[data-testid="submit-button"]', { timeout: 10000 }).click();






  });

  it('Deve realizar o login', () => {
    // Passo 4: Está na tela de login
    // Preenche os campos de login
    cy.wait(1000);
    cy.get('input[placeholder="Digite seu e-mail"]').type('carol@gmail.com');
    cy.get('input[placeholder="Digite sua senha"]').type('Theo1234!');
    
    cy.contains('Entrar').click({ force: true }); // Tentativa sem forçar
});
});