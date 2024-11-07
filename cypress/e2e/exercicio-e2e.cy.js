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
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Argus All-Weather Tank')
    
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
    
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
    
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Green', 3)
    
        produtosPage.buscarProduto('Tristan Endurance Tank')
        produtosPage.addProdutoCarrinho('S', 'Gray', 6)
        cy.get('.product_title').should('contain', 'Tristan Endurance Tank')
        
     })
