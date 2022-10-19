import assetsPage from '../pages/assetsPage';
import homePolygonAppsPage from '../pages/homePolygonAppsPage';
import loginWithWalletPage from '../pages/loginWithWalletPage';

class loginSteps {

	loginViaMetamask() {
		homePolygonAppsPage.openPolygonWalletApp();
		loginWithWalletPage.clickConnectWithMetamask();
	}

	closeNewWalletNotificationPopupIfPresent() {
		cy.wait(2000)
		cy.get('.app_router-view').then($element => {
			if ($element.find('.onboarding-modal__body__label').length > 0) {
				cy.contains('I am done!').click();
			}
		});
	}
}

module.exports = new loginSteps();
