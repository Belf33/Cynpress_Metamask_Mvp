class loginWithWalletPage {

	elements = {
		metamaskWalletConnectBlock: () => cy.xpath("//div/h5[contains(text(),'Metamask')]"),
		pageHeaderText: () => cy.get('.login__wrapper__main__header h4')
	};

	clickConnectWithMetamask() {
		this.elements.metamaskWalletConnectBlock().click();
	}

	titleShouldBeEqualTo(loginWithYourWallet) {
		this.elements.pageHeaderText().contains(loginWithYourWallet);
	}
}

module.exports = new loginWithWalletPage();
