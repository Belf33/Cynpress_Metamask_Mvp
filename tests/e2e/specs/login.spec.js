import assetsPage from '../pages/assetsPage';
import homePolygonAppsPage from '../pages/homePolygonAppsPage';
import loginWithWalletPage from '../pages/loginWithWalletPage';
import loginSteps from '../steps/loginSteps';

describe('Test User Login', () => {

	beforeEach(() => {
		cy.visit('https://wallet.polygon.technology/');
	});

	// it('Success open wallet auth page https://wallet-new.polygon.technology', () =>{
	// 	homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	// })
	//
	// it('Success opens "Login with your wallet" page when click “Polygon Bridge”', () =>{
	// 	homePolygonAppsPage.openPolygonWalletApp();
	// 	loginWithWalletPage.titleShouldBeEqualTo('Login with your wallet');
	// })

	// it('Success opens https://staking.polygon.technology/ page when click “Polygon Staking”', () =>{
	// 	homePolygonAppsPage.openPolygonStakingApp();
	// 	cy.wait(2000);
	// 	cy.url().should('include','staking.polygon.technology');
	// })
	//
	it('Success open "Login with your wallet" page when click “Polygon Wallet” ', () => {
		homePolygonAppsPage.openPolygonWalletApp();
		loginWithWalletPage.clickConnectWithMetamask();
		cy.acceptMetamaskAccess().should("be.true");

		loginSteps.closeNewWalletNotificationPopup();

		assetsPage.openUserInfoDropdown();
		assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
		cy.confirmMetamaskSignatureRequest()
	});

	// it('Success logout via Disconnect button', () => {
	// 	loginSteps.loginViaMetamask();
	// 	assetsPage.openUserInfoDropdown();
	// 	assetsPage.clickDisconnectButton();
	// 	assetsPage.clickYesLogoutButton();
	// 	homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	// })
	//
	// it('Success canceling disconnection when click Cancel button', () => {
	// 	loginSteps.loginViaMetamask();
	// 	assetsPage.openUserInfoDropdown();
	// 	assetsPage.clickDisconnectButton();
	// 	assetsPage.clickCancelLogoutButton();
	// 	assetsPage.openUserInfoDropdown();
	// 	assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
	// })

});
