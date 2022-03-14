/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Dashboard Template
 * 
 */
// -----------------------------------------------------------------

/**
 * 
 * 
 */
 import React from 'react';
 import {Outlet} from 'react-router-dom';
 import Sidebar from './navigations/Sidebar';
 import Bottombar from './navigations/Bottombar'
 const PublicLayout = () =>{
 
   return (
    <>
     {
     /**
      * 
      * Here you can add Topbar for different navigations of public views
      * [Home, Contact, About Us, ... etc]
      * 
      */
     }
        <Sidebar/>
        <Bottombar/>
     {
     /**
      * Outlet, contains all publiclayout {children},
      * Directories:
      * Views -> Auth -> [Login, Register, Forgot, Reset, Notify, Verify]
      */
     }
        <Outlet />
    </>
   );
 }
 
 export default PublicLayout;
 