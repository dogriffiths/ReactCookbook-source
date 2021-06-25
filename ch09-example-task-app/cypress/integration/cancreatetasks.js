describe('can create tasks', () => {
    it('should be possible to create a task', () => {
        cy.visit('/');
        cy.get('h2').should('not.exist')
        cy.contains(/save/i).should('not.exist')
        cy.contains('+').click();
        cy.contains(/save/i).should('be.visible')
        cy.getByLabel(/title/i).type('Buy some bread')
        cy.getByLabel(/description/i).type('Try to get those nice ciabatta rolls')
        cy.getByLabel(/context/i).select('shopping')
        cy.contains(/cancel/i).click()
        cy.contains(/save/i).should('not.exist')
        cy.contains('+').click();
        cy.getByLabel(/title/i).should('have.value', '')
        cy.getByLabel(/description/i).should('have.value', '')
        cy.getByLabel(/context/i).should('have.value', '')
        cy.getByLabel(/title/i).type('Buy some bread')
        cy.getByLabel(/description/i).type('Try to get those nice ciabatta rolls')
        cy.getByLabel(/context/i).select('shopping')
        cy.contains(/save/i).click()
        cy.contains(/save/i).should('not.exist')
        cy.get('h2').should('have.text', 'Shopping')
        cy.get('.TaskList .Task .Task-title').contains('Buy some bread').should('be.visible')
        cy.get('.TaskList .Task .Task-description').contains('Try to get those nice ciabatta rolls').should('be.visible')
        cy.contains('+').click();
        cy.getByLabel(/title/i).should('have.value', '')
        cy.getByLabel(/description/i).should('have.value', '')
        cy.getByLabel(/context/i).should('have.value', '')
    });
    it('should be possible to create tasks in different contexts', () => {
        cy.visit('/');
        cy.contains('+').click();
        cy.getByLabel(/title/i).type('Buy some bread')
        cy.getByLabel(/description/i).type('Try to get those nice ciabatta rolls')
        cy.getByLabel(/context/i).select('shopping')
        cy.contains(/save/i).click()
        cy.contains('+').click();
        cy.getByLabel(/title/i).type('Call workshop')
        cy.getByLabel(/description/i).type('Get new carb fitted')
        cy.getByLabel(/context/i).select('phone')
        cy.contains(/save/i).click()
        cy.get('h2').eq(0).should('have.text', 'Phone')
        cy.get('.TaskList').eq(0).find('.Task .Task-title').contains('Call workshop').should('be.visible')
        cy.get('.TaskList').eq(0).find('.Task .Task-description').contains('Get new carb fitted').should('be.visible')
        cy.get('h2').eq(1).should('have.text', 'Shopping')
        cy.get('.TaskList').eq(1).find('.Task .Task-title').contains('Buy some bread').should('be.visible')
        cy.get('.TaskList').eq(1).find('.Task .Task-description').contains('Try to get those nice ciabatta rolls').should('be.visible')
    });
    it('should preserve tasks if you reload the page', () => {
        cy.visit('/');
        cy.contains('+').click();
        cy.getByLabel(/title/i).type('Buy some bread')
        cy.getByLabel(/description/i).type('Try to get those nice ciabatta rolls')
        cy.getByLabel(/context/i).select('shopping')
        cy.contains(/save/i).click()
        cy.reload();
        cy.get('h2').should('have.text', 'Shopping')
        cy.get('.TaskList .Task .Task-title').contains('Buy some bread').should('be.visible')
    })
});