const path = require('path');
const synpressPath = path.join(
    process.cwd(),
    '/node_modules/@synthetixio/synpress',
);

console.log(process.cwd());
console.log(synpressPath);

module.exports = {
  extends: `${synpressPath}/.eslintrc.js`,
};
