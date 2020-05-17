describe('screenshot', () => {
    it('should be able to take a screenshot', () => {
        cy.visit('/');
        cy.screenshot('frontpage');
    });
});