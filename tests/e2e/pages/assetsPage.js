
class assetsPage {

	elements = {
		userDropdownButtonTitle: () => cy.get(".navbar__apps-section__account__desktop__address"),
		userDropdownTitle: () => cy.get(".account__profile-container__top__address__metamask"),
		disconnectButton: () => cy.get(".account__desktop .account__profile-container__disconnect"),
		submitLogoutButton: () => cy.get(".logout__buttons .primary"),
		cancelLogoutButton: () => cy.get(".logout__buttons .secondary")
	}

	openUserInfoDropdown() {
		cy.wait(1000)
		this.elements.userDropdownButtonTitle().click()
	}

	userDropdownTitleShouldBeEqualTo(title) {
		this.elements.userDropdownTitle().should('contain.text', title);
	}

	clickDisconnectButton() {
		this.elements.disconnectButton().click();
	}

	clickYesLogoutButton() {
		this.elements.submitLogoutButton().click();
	}

	clickCancelLogoutButton() {
		this.elements.cancelLogoutButton().click();
	}
}

module.exports = new assetsPage();
