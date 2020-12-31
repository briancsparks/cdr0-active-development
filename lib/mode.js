
require('dotenv').config()

// const sg                      = require('../polyrepo/cdr0-sg');
const path                    = require('path');
const os                      = require('os');

module.exports = function (that ='') {
  const dirname = that.path;

  return {
    isProduction,
    isActiveDevelopment,
    mode,
  };

  // ==================================================================================================================

  // ------------------------------------------------------------------------------------------------------------------
  function isProduction() {
    return process.env.NODE_ENV === 'production';
  }

  // ------------------------------------------------------------------------------------------------------------------
  function isActiveDevelopment() {
    if (isProduction())   { return false; }

    const user = os.userInfo();

    let result;

    // Check username
    // grumpy.unless(process.env.CDR0_ACTIVEDEVELOPMENT_USERNAME, `CDR0_ACTIVEDEVELOPMENT_USERNAME should be set.`);
    result = !!process.env.CDR0_ACTIVEDEVELOPMENT_USERNAME;
    result = result && (process.env.CDR0_ACTIVEDEVELOPMENT_USERNAME === user.username);

    // Check the dir
    // grumpy.unless(process.env.CDR0_ACTIVEDEVELOPMENT_ROOT, `CDR0_ACTIVEDEVELOPMENT_ROOT should be set.`);
    result = result && !!process.env.CDR0_ACTIVEDEVELOPMENT_ROOT;
    result = result && dirname.startsWith(path.join(user.homedir, process.env.CDR0_ACTIVEDEVELOPMENT_ROOT ||''));

    return result;
  }

  // ------------------------------------------------------------------------------------------------------------------
  function mode(forReal) {
    if (forReal) {
      // TODO: NO!!! Do not do this
      return 'there_is_no_spoon';
    }

    return 'booya';
  }
};

