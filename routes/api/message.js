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
const express = require('express');

const {
    createMessage,
    readMessage,
} = require('../../controllers/Message.controller');

// passport Authorization
const checkAuthorized = require('../../middleware/checkAuthorized');

const router = express.Router();
/**
 *  Message route api's
 */
router.post('/auth/create', checkAuthorized, createMessage.new); // authorized router

router.get('/auth/read', checkAuthorized, readMessage.all); // authorized router

module.exports = router; 