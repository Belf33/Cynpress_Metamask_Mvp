import assetsPage from '../pages/assetsPage';
import homePolygonAppsPage from '../pages/homePolygonAppsPage';
import loginWithWalletPage from '../pages/loginWithWalletPage';
import loginSteps from '../steps/loginSteps';

describe('Test User Login', () => {

	beforeEach(() => {
		cy.visit('https://wallet-beta.polygon.technology/');
	});

	it('Success open wallet auth page', () =>{
		homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	})

	it('Success opens "Login with your wallet" page when click “Polygon Bridge”', () =>{
		homePolygonAppsPage.openPolygonWalletApp();
		loginWithWalletPage.titleShouldBeEqualTo('Login with your wallet');
	})

	//need to figured out how to work with second window
	it.skip('Success opens https://staking.polygon.technology/ page when click “Polygon Staking”', () =>{
		homePolygonAppsPage.openPolygonStakingApp();
		cy.wait(2000);
		cy.url().should('include','staking.polygon.technology');
	})

	it('Success open "Login with your wallet" page when click “Polygon Wallet” ', () => {
		homePolygonAppsPage.openPolygonWalletApp();

		loginWithWalletPage.clickConnectWithMetamask();

		cy.acceptMetamaskAccess().should("be.true");

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
	});

	it('Success logout via Disconnect button', () => {
		loginSteps.loginViaMetamask();

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.clickDisconnectButton();
		assetsPage.clickYesLogoutButton();

		homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	})

	it('Success canceling disconnection when click Cancel button', () => {
		loginSteps.loginViaMetamask();

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.clickDisconnectButton();
		assetsPage.clickCancelLogoutButton();
		assetsPage.openUserInfoDropdown();
		assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
	})

});
