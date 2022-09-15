describe('Test User Login', () => {

	it('Add Mumbai network', () => {
		cy.addMetamaskNetwork({
			networkName: 'Mumbai Testnet',
			rpcUrl: 'https://rpc-mumbai.maticvigil.com',
			chainId: '80001',
			symbol: 'ETH',
			blockExplorer: 'https://explorer-mumbai.maticvigil.com',
			isTestnet: true
		});
		cy.changeMetamaskNetwork("Mumbai");
	});

	it('Add Polygon network', () => {
		cy.addMetamaskNetwork({
			networkName: 'Polygon',
			rpcUrl: 'https://rpc.ankr.com/polygon/486f6d938d85e35aeacf83a59afd95c4fab739093c8f919adb258799d81d51bf',
			chainId: '137',
			symbol: 'MATIC',
			blockExplorer: 'https://polygonscan.com',
			isTestnet: false
		});
	});

	it('Connects with Metamask', () => {
		cy.visit('https://wallet-new.polygon.technology');
		// cy.addMetamaskNetwork("mumbai");
		// cy.contains('Sign').click();
		// cy.contains('Confirm').click();
		// cy.contains('Connect Wallet').click();
		// cy.contains('Metamask').click();
		// cy.switchToMetamaskWindow();
		// cy.addMetamaskNetwork({
		// 	networkName: 'Mumbai Testnet',
		// 	rpcUrl: 'https://rpc-mumbai.maticvigil.com',
		// 	chainId: '80001',
		// 	symbol: 'ETH',
		// 	blockExplorer: 'https://explorer-mumbai.maticvigil.com',
		// 	isTestnet: true
		// });
		// cy.changeMetamaskNetwork("Mumbai");
		// cy.acceptMetamaskAccess().should("be.true");
		// cy.confirmMetamaskSignatureRequest();
		// cy.switchToCypressWindow();
		// cy.contains('Add Project').should('be.visible');
	});

});
