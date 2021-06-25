describe('can create tasks', () => {
    it('should be possible to create lots of tasks', () => {
        cy.visit('/');
        cy.viewport(1300, 1000)
        localStorage.setItem('tasks', JSON.stringify([
            {id: '1', title: 'Choose company name', description: 'Check for available domain names', context: 'research'},
            {id: '2', title: 'Call accountant', description: 'Ask about international tax rules', context: 'phone'},
            {id: '3', title: 'Business office', description: 'Look at the co-working space', context: 'car'},
            {id: '4', title: 'Model articles', description: 'Purchase and modify model articles', context: 'shopping'},
            {id: '5', title: 'Register company', description: 'Complete registration details online', context: 'admin'},
            {id: '6', title: 'Sales tax registration', description: 'Ask accountant', context: 'phone'},
            {id: '7', title: 'Domain name', description: 'Buy domain name', context: 'shopping'},
            {id: '8', title: 'Email', description: 'Setup business email', context: 'shopping'},
            {id: '9', title: 'Buy camera', description: 'Digital SLR. Amazon', context: 'shopping'},
            {id: '10', title: 'Buy lights', description: 'Ring light. Amazon', context: 'shopping'},
            {id: '11', title: 'Studio', description: 'Build studio', context: 'home'},
            {id: '12', title: 'YouTube account', description: 'Register new account', context: 'admin'},
            {id: '13', title: 'Courses', description: 'Pitch three courses', context: 'email'},
            {id: '14', title: 'Bank account', description: 'Open business bank account', context: 'admin'},
            {id: '15', title: 'Helvetica', description: 'License new typeface', context: 'shopping'},
            {id: '16', title: 'Site', description: 'Buy business web site', context: 'shopping'},
            {id: '17', title: 'Slack', description: 'Register slack account', context: 'admin'},
            {id: '18', title: 'CI server', description: 'Build CI server', context: 'coding'},
            {id: '19', title: 'Charts', description: 'Buy charts package license', context: 'shopping'},
            {id: '20', title: 'Portal', description: 'Create user portal', context: 'coding'},
            {id: '21', title: 'Android', description: 'Create Android app', context: 'coding'},
            {id: '22', title: 'Payments', description: 'Create payments account', context: 'admin'},
        ]))
        cy.reload()
        // cy.get('h2').eq(0).should('have.text', 'Car')
        // cy.screenshot('frontpage')
    });
});