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
const Message = require('../models/Message');
const mongoose = require('mongoose');

// Message (create, read ..)
const createMessage = {
    // create new
    new: async(req,res)=>{
        const User_id = req.user.payload.user_id;
        const { message, to} = req.body;
        if(!message || message===' '){
            return res.status(500).json({message: 'Input fields required!', status: false});
        }
        const newMessage = new Message({
            message: message,
            to: to,
            from: User_id
        })
        await newMessage.save({new:true},(err, success)=>{
            // if error  
            if(err) return res.status(404).json({messsage: err.message})
            // if message not found
            else if(success == null) return res.status(400).json({message: 'Unable to sent message!', status:false});
            // if created
            else return res.status(201).json({messsage: 'Message sent!', status:true})
        });
    }
}

// read message' 
const readMessage = {
    all: async(req, res)=>{
        const User_id = req.user.payload.user_id;
        let valid_user = mongoose.Types.ObjectId(User_id);
        await Message.aggregate([
            { 
                $match: 
                {
                    $or: [
                        {to: valid_user},
                        {from: valid_user}
                    ]
                }
            },
            { 
                $sort : { createdAt : -1 } 
            },
            {
                $lookup:
                {
                    from: `profiles`,
                    localField: `to`,
                    foreignField: `user`,
                    as: `toprofileObj`
                }
            },
            {
                $unwind: "$toprofileObj"
            },
            {
                $lookup:
                {
                    from: `profiles`,
                    localField: `from`,
                    foreignField: `user`,
                    as: `fromprofileObj`
                }
            },
            {
                $unwind: "$fromprofileObj"
            },
            {
                $group: {
                _id: {
                    $cond: [
                        { 
                            $eq: [ "$to", valid_user ] 
                        },
                        { 
                            $concat: [{ $toString: "$to" }, "+", { $toString: "$from" } ] 
                        },
                        {
                            $concat: [ { $toString: "$from" }, "+", { $toString: "$to" } ] 
                        }
                    ]
                },
                updatedAt: { $first: "$updatedAt" },
                messages: { $push: "$$ROOT" }
                }
            },
            {
                 $addFields: { 
                     messages: {  
                        $slice: ["$messages", 6] 
                    } 
                } 
            } 
        ], (err, success)=>{
          //console.log(success[0])
            if(err) return res.status(500).json({message: 'Something went wrong!', status:false})
            else if(success) return res.status(200).json({data: success,  status:true})
            else return res.status(404).json({message: 'Not found!', status:false})
        });
    },
}


module.exports = {
   createMessage,
   readMessage,
}