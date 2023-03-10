describe('Major Test case', () => {
	const travellers = [
		'alex',
		'hales',
		'janny',
		'waide',
		'jasmin',
		'janifier',
		'robort',
		'gibs',
	];
	const baseUrl = 'http://localhost:3000/';
	const amounts = ['10', '0', '30', '40', '20', '40', '90', '100'];

	it('should successfully navigate to project main page', () => {
		cy.visit(baseUrl);
		cy.contains('Traveller Expenses').should('exist');
	});

	it('should open add expense model and name,amount,Submit,Close Button fields should exist', () => {
		cy.visit(baseUrl);
		cy.get('.action-buttons > .mat-primary').click();
		cy.contains('Add User amount').should('exist');

		cy.contains('Name').should('exist');
		cy.contains('Amount').should('exist');
		cy.contains('Submit').should('exist');
		cy.contains('Close').should('exist');
	});

	it('should close add Expense model', () => {
		cy.visit(baseUrl);
		cy.get('.action-buttons > .mat-primary').click();
		cy.contains('Submit').should('exist');
	});

	it('shoulld input  dummy data and show payout', () => {
		cy.visit(baseUrl);
		let random = Math.floor(Math.random() * travellers.length);

		cy.get('.action-buttons > .mat-primary').click();
		cy.get(`#mat-input-1`).type(travellers[random]);
		cy.get(`#mat-input-2`).type(amounts[random]);
		cy.get('.mat-dialog-actions > .mat-primary').click();

		random = Math.floor(Math.random() * travellers.length);

		cy.get('.action-buttons > .mat-primary').click();
		cy.get(`#mat-input-3`).type(travellers[random]);
		cy.get(`#mat-input-4`).type(amounts[random]);
		cy.get('.mat-dialog-actions > .mat-primary').click();

		random = Math.floor(Math.random() * travellers.length);

		cy.get('.action-buttons > .mat-primary').click();
		cy.get(`#mat-input-5`).type(travellers[random]);
		cy.get(`#mat-input-6`).type(amounts[random]);
		cy.get('.mat-dialog-actions > .mat-primary').click();

		// setTimeout(() => {

		// // }, 3000);
		// cy.get('.mat-accent > .mat-button-wrapper', { timeout: 5000 })
		// 	.last()
		// 	.should('be.enabled');

		cy.get('.mat-accent > .mat-button-wrapper', { timeout: 5000 })
			.last()
			.click();
	});
});
