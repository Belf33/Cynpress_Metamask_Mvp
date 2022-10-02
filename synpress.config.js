const path = require('path');
const { defineConfig } = require('cypress');
const setupNodeEvents = require(`${getSynpressPath()}/plugins/index`);
const fixturesFolder = `${getSynpressPath()}/fixtures`;
const supportFile = 'tests/e2e/support.js';

module.exports = defineConfig({
	userAgent: 'synpress',
	retries: {
		runMode: process.env.CI ? 1 : 0,
		openMode: 0,
	},
	fixturesFolder,
	screenshotsFolder: 'tests/e2e/screenshots',
	videosFolder: 'tests/e2e/videos',
	chromeWebSecurity: true,
	viewportWidth: 1920,
	viewportHeight: 1080,
	env: {
		coverage: false,
	},
	defaultCommandTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
	pageLoadTimeout: process.env.SYNDEBUG ? 0 : 9999999,
	requestTimeout: process.env.SYNDEBUG ? 0 : 9999999,
	e2e: {
		setupNodeEvents,
		baseUrl: 'https://wallet-new.polygon.technology/',
		specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}',
		supportFile,
	},
	component: {
		setupNodeEvents,
		specPattern: './**/*spec.{js,jsx,ts,tsx}',
		supportFile,
	},
});

function getSynpressPath() {
		return path.dirname(require.resolve('@synthetixio/synpress'));
}
