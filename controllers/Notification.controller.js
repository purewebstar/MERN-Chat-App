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
const Notification = require('../models/Notification');
// Notification (create, read ..);

const createNotification = { 
    friend: async(to, from, content)=>{
        const newNotification = await Notification({
            to: to,
            from: from,
            content: content,
        });
        await newNotification.save();
        return true;
    }
};
// read notification
const readNotification = {
    all: async(req, res)=>{
        const User_id = req.user.payload.user_id;
        const notification =  await Notification.find({to: User_id}).sort({createdAt: -1}).clone();
        return res.status(200).json({data: notification, status:true});
    },
    byId: async(req, res)=>{
        const User_id = req.user.payload.user_id;
        const id = req.params.id;
        const notification =  await Notification.find({_id:id, to: User_id}).sort({createdAt: -1}).clone();
        return res.status(200).json({data: notification, status:true});
    }
}
// update Notification
const updateNotification = {
    markAsRead: async(req, res)=>{
        const User_id = req.user.payload.user_id;
        const notification_id = req.params.id;
        await Notification.findOneAndUpdate({_id: notification_id, to: User_id}, 
            {
                $set:{
                    read: true
                }
            },
            (err,success)=>{
            if(err) return res.status(500).json({message: 'Something went wrong!', status: true});
            else if(success){
                return res.status(200).json({message: 'success', status: true});
            }
        }).clone();
    }
}
// remove notification
const removeNotification = {
    /**
     *  delete notificaiton
     */
    delete: async(req,res)=>{
        const notification_id = req.params.id;
        const User_id = req.user.payload.user_id;
        await Notification.findOneAndRemove({_id: notification_id, to: User_id}, 
            (err,success)=>{
            if(err) return res.status(500).json({message: 'Something went wrong!', status: true});
            else if(success){
                return res.status(200).json({message: 'Notification removed!', status: true});
            }
        }).clone();
    },  
}

module.exports = {
    createNotification,
    readNotification,
    removeNotification,
    updateNotification,
}