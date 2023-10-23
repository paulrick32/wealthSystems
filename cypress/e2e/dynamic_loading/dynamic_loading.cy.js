describe('Test dynamic loading page', () => {  
    it('should have the text Hello World!', () => {
        cy.visit('dynamic_loading/1')
        cy.contains('Start').click({force: true})
        cy.get('#finish > h4').should('have.text', 'Hello World!')
    });
  });