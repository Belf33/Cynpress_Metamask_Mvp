
describe('Test User Login', () => {
	it('Connects with Metamask', () => {
		cy.visit('https://wallet-new.polygon.technology');

		cy.contains('Getting started with Polygon Proof of Stake chain');
		cy.contains('Polygon Wallet').click();
		cy.contains('Metamask').click();
		cy.acceptMetamaskAccess().should("be.true");
		cy.contains('New Wallet View');
		cy.contains('I am done!').click();
		cy.contains('0x32..');
	});
});
