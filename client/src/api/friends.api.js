/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import instance from './index';

/**
 * 
 * Friends API endpoints
 */
 
export const createFriend = {
    newRequest: async(id)=>(
        await instance.post(`/friends/auth/create/${id}`)
    ),
    acceptRequest: async(id)=>(
        await instance.post(`/friends/auth/accept/${id}`)
    )
}

export const readFriend = {
    list: async()=>(
        await instance.get('/friend/auth/read')
    ),
}

export const removeFriend = {
    list: async(id)=>(
        await instance.get(`/friend/auth/list/${id}`)
    ),
    request: async(id)=>(
        await instance.get(`/friend/auth/request/${id}`)
    ),
}
