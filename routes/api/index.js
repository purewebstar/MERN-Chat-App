/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------

const router = require('express').Router();

const accountRoutes = require('./account');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const notificationRoutes = require('./notification');
const friendRoutes = require('./friend');
const messageRoutes = require('./message');

// account routes
router.use('/account', accountRoutes);

// auth routes
router.use('/token', authRoutes);

// profile routes
router.use('/profile', profileRoutes);

// notification routes
router.use('/notification',notificationRoutes);

// friend routes
router.use('/friend', friendRoutes);

// message routes
router.use('/message', messageRoutes);


module.exports = router;