/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      
  });
  
  it('Deve realizar o login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
  });



})

describe('Funcionalidade= Selecionar produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar 1 produtos da lista', () => {
        cy.get('.block-inner').first().click()
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve selecionar 1 produto da lista', () => {
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
    });

    it('Deve selecionar 1 produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('.product_title').should('contain', 'Ajax Full-Zip Sweatshirt')
    });

    it('Deve buscar 1 produto com sucesso', () => {
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
        cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
    });
});

describe('Funcionalidade= Adicionar produto ao carrinho', () => {

    it('Deve adicionar 1 produto ao carrinho', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Green', 3)
    });
    
});