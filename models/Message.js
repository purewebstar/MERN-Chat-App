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

const MessageSchema = mongoose.Schema({
    message: {
      type: String,
      required: true
    },
    from: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sentDate: {
        type: Date,
        default: Date.now()
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema);
