class homePolygonAppsPage {

	elements = {
		pageTitleText: () => cy.get(".homepage .headline-1"),
		polygonWalletBlock: () => cy.get("img[src$='poly-wallet.png']"),
		polygonStakingBlock: () => cy.get("img[src$='/assets/img/homepage/poly-staking.png']")
	}

	titleShouldBeEqualTo(title) {
		this.elements.pageTitleText().contains(title);
	}

	openPolygonWalletApp() {
		this.elements.polygonWalletBlock().click();
	}

	openPolygonStakingApp() {
		this.elements.polygonStakingBlock().invoke('removeAttr', 'target').click();
	}
}

module.exports = new homePolygonAppsPage();
