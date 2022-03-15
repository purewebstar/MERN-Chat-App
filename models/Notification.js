/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
'use strict'
/**
 *  Module Dependencies
 */
const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },

},{
    timestamps: true
})

module.exports = mongoose.model('Notification', NotificationSchema)
