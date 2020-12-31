

const ad                      = require('../..')(module);

console.log(`Is production: ${ad.isProduction()}`);
console.log(`Is active development: ${ad.isActiveDevelopment()}`);
