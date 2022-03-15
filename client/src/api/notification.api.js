/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import instance from './index';

/**
 * 
 *  read notifications, markAsread Notification API endpoints
 */

export const readNotification = {
    all: async()=>(
        await instance.get(`/notification/auth/read`)
    )
};

export const updateNotification = {
    markAsread: async(id)=>(
        await instance.patch(`/notification/auth/update/${id}`)
    ),
}

export const removeNotification = {
    delete: async(id)=>(
        await instance.delete(`/notification/auth/remove/${id}`)
    )
};
