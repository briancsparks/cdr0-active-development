
// const sg                      = require('./polyrepo/cdr0-sg');

module.exports = function (that) {
  const dirname = that.path;
  // grumpy.if_(dirname === '', `module.path should not be empty`);

  return Object.assign({},
    require('./lib/mode')(that),
  );
};


