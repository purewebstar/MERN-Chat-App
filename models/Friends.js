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

const FriendsSchema = mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    friendList: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    newFriendRequest: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
},{
    timestamps: true
})

module.exports = mongoose.model('Friends', FriendsSchema);