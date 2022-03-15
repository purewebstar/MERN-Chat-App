/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
'use strict'

/**
 *  importing Modules
 */
const Friends = require('../models/Friends');
const mongoose = require('mongoose');
const User = require('../models/User');

// send friend request
const createFriend = {
    newRequest: async(req, res)=>{
        const user_id = req.params.id;
        const valid_id = req.user.payload.user_id;
        if(valid_id == user_id){
            return res.status(409).json({messsage: "Error", status:false})
        }
        Friends.findOneAndUpdate({user: user_id}, {
            $push: { 
                newFriendRequest: {
                    user: valid_id,
                },
            },
        }, {new: true, upsert: true}, async function (err, success){
            // if error 
            if(err) return res.status(404).json({messsage: err.message})
            else if(success == null)  return res.status(404).json({messsage: "Unable to follow this user!", status:false});
            else return res.status(201).json({message: 'Friend request sent', status: true})
        }).clone();
    },

    acceptRequest: async(req, res)=>{
        const user_id = req.params.id;
        const valid_id = req.user.payload.user_id;
        if(valid_id == user_id){
            return res.status(409).json({messsage: "Error", status:false})
        }
        Friends.findOneAndUpdate({user: valid_id}, {
            $push: { 
                friendList: {
                    user: user_id,
                },
            },
            $pull: {
                newFriendRequest: {
                    user: user_id,
                },
            }
        }, {new: true, upsert: true}, async function (err, success){
            // if error 
            if(err) return res.status(404).json({messsage: err.message})
            else if(success == null)  return res.status(404).json({messsage: "Unable to follow this user!", status:false});
            else return res.status(201).json({message: 'Friend request sent', status: true})
        }).clone();
    }

}

const readFriend = {
   list: async(req, res)=>{
    const user_id = req.user.payload.user_id;
    let valid_user = mongoose.Types.ObjectId(user_id);
    await User.aggregate([
        {
            $match: { _id: valid_user }
        },
        {
            $lookup:
            {
                from: `friends`,
                localField: `_id`,
                foreignField: `user`,
                as: `friendsObj`
            }
        },
        {
            $unwind: '$friendsObj'
        },
        {
            $lookup:
            {
                from: `profiles`,
                localField: `user`,
                foreignField: `user`,
                as: `profileObj`
            }
        },
        {
            $unwind: '$profileObj'
        },
        {
            $project: 
            {
                password: 0,
                __v: 0
            }
        },
    ], (err,success)=>{
        //console.log(success)
        if(err) return res.status(400).json({message: 'Something went wrong!', status:false})
        else if(!success) return res.status(404).json({message: 'Error', status:false});
        else return res.status(200).json({data: success, message: 'Success', status:true})
    });
   },
}

const removeFriend = {
    list: async(req, res)=>{
        const user_id = req.params.id;
        const valid_id = req.user.payload.user_id;
        if(valid_id == user_id){
            return res.status(409).json({messsage: "Error", status:false})
        }
        Friends.findOneAndRemove({user: valid_id}, {
            $pull: {
                friendList: {
                    user: user_id,
                },
            }
        }, {new: true, upsert: true}, async function (err, success){
            // if error 
            if(err) return res.status(404).json({messsage: err.message})
            else if(success == null)  return res.status(404).json({messsage: "Unable to follow this user!", status:false});
            else return res.status(201).json({message: 'Friend request sent', status: true})
        }).clone();
    },
    request: async(req,res)=>{
        const user_id = req.params.id;
        const valid_id = req.user.payload.user_id;
        if(valid_id == user_id){
            return res.status(409).json({messsage: "Error", status:false})
        }
        Friends.findOneAndRemove({user: valid_id}, {
            $pull: {
                newFriendRequest: {
                    user: user_id,
                },
            }
        }, {new: true, upsert: true}, async function (err, success){
            // if error 
            if(err) return res.status(404).json({messsage: err.message})
            else if(success == null)  return res.status(404).json({messsage: "Unable to follow this user!", status:false});
            else return res.status(201).json({message: 'Friend request sent', status: true})
        }).clone();
    }
}

module.exports = {
    createFriend,
    readFriend,
    removeFriend,
}