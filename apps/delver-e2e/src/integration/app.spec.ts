import { getGreeting } from '../support/app.po';

describe('delver', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to delver!');
  });
});
