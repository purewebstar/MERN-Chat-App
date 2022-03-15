/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import instance from './index';

/**
 * 
 * Message API endpoints
 */
 
export const createMessage = {
    new: async(to, message)=>(
        await instance.post('/message/auth/create', {to,message})
    )
}

export const readMessage = {
    all: async()=>(
        await instance.get('/message/auth/read')
    ),
}
