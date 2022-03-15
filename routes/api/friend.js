/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
'use strict'
/**
 *  Importing Modules
 */
 'use strict'
 /**
  *  Importing Modules
  */
const express = require('express');

const {
    createFriend,
    readFriend,
    removeFriend,
} = require('../../controllers/Friend.controller');

// passport Authorization
const checkAuthorized = require('../../middleware/checkAuthorized');

const router = express.Router();
/**
 *  Friends route api's
 */
// create new friend request
router.post('/auth/create', checkAuthorized, createFriend.newRequest); // authorized router
// accept friend request
router.post('/auth/accept', checkAuthorized, createFriend.acceptRequest); // authorized router
// read friend list
router.get('/auth/read', checkAuthorized, readFriend.list); // authorized router
// remove friend list
router.delete('/auth/list', checkAuthorized, removeFriend.list); // authorized router
// remove friend request
router.delete('/auth/request', checkAuthorized, removeFriend.request); // authorized router


module.exports = router; 