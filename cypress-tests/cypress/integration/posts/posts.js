/// <reference types="cypress" />

describe('testing posts', () => {
	before(() => {
		cy.visit('/');
		cy.get('select').as('select');
	});

	beforeEach(() => {
		cy.get('select').as('select');
	});

	it('cy.request() - retrieve all posts from https://jsonplaceholder.typicode.com/posts', () => {
		// https://on.cypress.io/request
		cy.request('https://jsonplaceholder.typicode.com/posts').should(
			(response) => {
				cy.log(response);
				expect(response.status).to.eq(200);
				expect(response.body).to.have.property('length');
			}
		);
	});

	it('should confirm that first select option value is select-post', () => {
		cy.get('@select').should('have.value', 'select-post');
	});

	it('should confirm that there are 100 post options', () => {
		cy.get('@select').should('have.value', 'select-post');
		cy.get('option').should(($option) => {
			expect($option).to.have.length(101);
		});
	});

	it('should confirm clicking on first post changes url', () => {
		cy.get('@select').select('1')//.should('have.text', '100% Playground');
		cy.location().should((location) => {
            // expect(location.hash).to.be.empty
            expect(location.href).to.eq('http://localhost:3000/posts/1')
	   });
    })
});
