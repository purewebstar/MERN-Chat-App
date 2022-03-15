/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import instance from './index';

/**
 *  create profile
 */
export const createProfile = {
    personal: async(phone, bio) =>(
        await instance.post(`/profile/auth/create-personal`, { phone, bio}) // authorized api route
    ),
    photo: async(formData) =>(
        await instance.post(`/profile/auth/upload-photo`,formData) // authorized api route
    ),

};
 
export const readProfile = {
   auth: {
    byId: async() => (
        await instance.get(`/profile/auth/read-profile`) // authorized api route
    ),
   },

};
