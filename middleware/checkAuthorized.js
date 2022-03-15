/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
const passport = require('passport');

const checkAuthorized = passport.authenticate('jwt', { session: false });

module.exports = checkAuthorized;