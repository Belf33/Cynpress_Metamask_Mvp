import synpress from "node_modules/@synthetixio/";

describe('Test User Login', () => {

	// it('Add Mumbai network', () => {
	// 	cy.addMetamaskNetwork({
	// 		networkName: 'Mumbai Testnet',
	// 		rpcUrl: 'https://rpc-mumbai.maticvigil.com',
	// 		chainId: '80001',
	// 		symbol: 'ETH',
	// 		blockExplorer: 'https://explorer-mumbai.maticvigil.com',
	// 		isTestnet: true
	// 	});
	// 	cy.changeMetamaskNetwork("Mumbai");
	// });
	//
	// it('Add Polygon network', () => {
	// 	cy.addMetamaskNetwork({
	// 		networkName: 'Polygon',
	// 		rpcUrl: 'https://rpc.ankr.com/polygon/486f6d938d85e35aeacf83a59afd95c4fab739093c8f919adb258799d81d51bf',
	// 		chainId: '137',
	// 		symbol: 'MATIC',
	// 		blockExplorer: 'https://polygonscan.com',
	// 		isTestnet: false
	// 	});
	// });

	synpress.baseUrl = "https://wallet-new.polygon.technology/";

	it('Connects with Metamask', () => {
		cy.visit('https://wallet-new.polygon.technology');

		cy.contains('Getting started with Polygon Proof of Stake chain');
		cy.contains('Polygon Wallet').click();
		cy.contains('Metamask').click();
		cy.acceptMetamaskAccess().should("be.true");
		cy.contains('New Wallet View');
		cy.contains('I am done!').click();
		cy.contains('0x32..');
		// cy.contains('Switch to Polygon').click();
		// cy.acceptMetamaskAccess().should("be.true");

		// cy.get('.navbar__apps-section__account__desktop').click();
		// assert.equal(cy.get('account__profile-container__top__address__metamask').toString(), 'Connected with MetaMask');




		// cy.acceptMetamaskAccess().should("be.true");
		// cy.confirmMetamaskSignatureRequest();
		// cy.switchToCypressWindow();
		// cy.contains('Add Project').should('be.visible');
	});

});
