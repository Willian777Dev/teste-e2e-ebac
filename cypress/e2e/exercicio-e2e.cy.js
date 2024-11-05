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

 })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações

        it('Deve realizar o login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
        });
    
        it('Deve selecionar 1 produto da lista', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Argus All-Weather Tank')
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
        });
    
        it('Deve selecionar 1 produto da lista', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('.product_title').should('contain', 'Ajax Full-Zip Sweatshirt')
        });
    
        it('Deve buscar 1 produto com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
        cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
        });
    
        it('Deve adicionar 1 produto ao carrinho', () => {
            produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
            produtosPage.addProdutoCarrinho('XS', 'Green', 3)
            cy.get('.product_title').should('contain', 'Ajax Full-Zip Sweatshirt')
        });
    
        it('Deve adicionar 1 produto ao carrinho', () => {
            produtosPage.buscarProduto('Tristan Endurance Tank')
            produtosPage.addProdutoCarrinho('S', 'Gray', 6)
            cy.get('.product_title').should('contain', 'Tristan Endurance Tank')
        });
     })
