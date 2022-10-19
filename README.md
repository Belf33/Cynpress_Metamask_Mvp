# wallet-suite-test-automation


#Setup project
- download git repo
- npm install
- add root directory .env file with SECRET_WORDS to install your metamask account

#Important
Synpress doesn't seem to communicate with metamask properly if "chromeWebSecurity": false flag is set. More about it here.

There is a global before() which runs metamask setup before all tests:

- passes welcome page
- imports wallet
- changes network (defaults to `kovan`) or creates custom network and changes to
  it (depending on your setup)
- switches back to Cypress window and starts testing

It requires environmental variable called SECRET_WORDS to be present in following format => 'word1, word2, etc..' or private key in an environmental variable called PRIVATE_KEY.

To change default network, you can use NETWORK_NAME environmental variable, for example: NETWORK_NAME=rinkeby.

!!!Default Network is Polygon now!!!!

Available choices are: mainnet, ropsten, kovan, rinkeby, goerli and localhost.

To create and switch to custom network at metamask setup phase, use these:

1. NETWORK_NAME => ex: synthetix
2. RPC_URL => ex: https://synthetix-node.io
3. CHAIN_ID => ex: 123
4. SYMBOL (optional) => ex: SNX
5. BLOCK_EXPLORER (optional) => ex: https://synthetix-explorer.io
6. IS_TESTNET (optional) => ex: false

Metamask version is hardcoded and frequently updated under supervision to avoid a case when e2e tests break because of CSS classes changes in new version, so all you need is to keep synpress updated in your project. However, you can still override metamask with METAMASK_VERSION environmental variable, for example: METAMASK_VERSION=9.3.0 or METAMASK_VERSION=latest.

If you don't want to use environmental variables, you can modify setupMetamask() to following:

setupMetamask(secretWordsOrPrivateKey, network, password), for example: setupMetamask('word1, word2, etc..', 'mainnet', 'password').

You can also add and switch to custom network by passing an object instead of string inside setupMetamask(secretWordsOrPrivateKey, network, password) function for network parameter.

If you want to use Etherscan API helpers, you will have to provide Etherscan API key using ETHERSCAN_KEY environmental variable.

To fail a test if there are any browser console errors, set FAIL_ON_ERROR to 1 or true.

Automatic waiting for XHR requests to finish before tests start can be turned on with CYPRESS_RESOURCES_WAIT environmental variable, set it to 1 or true.

If you want to skip metamask extension installation or metamask setup, you can use SKIP_METAMASK_INSTALL and SKIP_METAMASK_SETUP separately. Both variables accept 1 or true.

Synpress is blazingly-fast ⚡ by default! If you want to change that, you can use STABLE_MODE=true (which will introduce delays only between main actions, 300ms by default) / STABLE_MODE=<value> or SLOW_MODE=true (which will introduce delay between every action, 50ms by default) / SLOW_MODE=<value>.

DEBUG=synpress:* is very useful while debugging your tests. It enables following features:

- improved logging
- cypress debugger
- playwright debugger
- slow down tests

#Test framework structure

```text
project_dir
└── tests
    └── e2e
        └── .eslintrc.js
        └── support.js
        └── tsconfig.json
        └── specs
            └── example-spec.js
        └── pages
            └── example-page.js
        └── Steps
            └── example-steps.js
```

We are using POM (page object model). 

Page Object Model, also known as POM, is a design pattern from Selenium that creates an object repository for storing all web elements. It is useful in reducing code duplication and improves test case maintenance.

In Page Object Model, consider each web page of an application as a class file. Each class file will contain only corresponding web page elements. Using these elements, testers can perform operations on the website under test.

Tests itself located in tests/e2e/specs/
Pages located in tests/e2e/pages/

Also, we are using steps approach to combine some steps from different pages in one method to minimise steps in tests or preconditions that not check specific logic. (that could be avoid and we can use just Pages classes instead)

#Test cases run
use 'npm test run' to run test cases

#

