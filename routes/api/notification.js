/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
'use strict'
/*
 importing modules
*/
const express = require('express');

// notification controllers
const {
    readNotification,
    removeNotification,
    updateNotification,
} = require('../../controllers/Notification.controller');
// passport Authorization
const checkAuthorized = require('../../middleware/checkAuthorized');

const router = express.Router();
/**
 *  Notification route api's
*/
// read notification
router.get('/auth/read', checkAuthorized,  readNotification.all); // authorized router
// update notification (read == true)
router.patch('/auth/update/:id', checkAuthorized, updateNotification.markAsRead); // authorized router

// remove/delete notification
router.delete('/auth/remove/:id', checkAuthorized, removeNotification.delete); // authorized router

module.exports = router;