function terminalLog(violations) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )

    cy.task('table', violationData)
    console.table(violationData)
}

describe('can be used', () => {
    it('should be accessible when starting', () => {
        cy.visit('/');
        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog);
    });
    it('should be accessible when creating a task', () => {
        cy.visit('/');
        cy.injectAxe();
        cy.configureAxe({
            rules: [{ id: 'tabindex', enabled: false }]
        })
        cy.contains('+').click();
        cy.checkA11y(null, null, terminalLog);
    });
});