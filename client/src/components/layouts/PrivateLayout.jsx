/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from './navigations/Sidebar';
import Bottombar from './navigations/Bottombar';

const PrivateLayout = () =>{

  return (
   <>
    {
    /**
     * 
     * Here you can add Topbar for different navigations of private views
     * [Dashboard, profile , ... etc]
     * 
     */
    }
    <Sidebar />

    {
    /**
     *  [Bottombar Navigation For Smaller devices [Mobile, Tablets, ..etc]
     * [Dashboard, order, blog , ... etc]
     * 
     */
    }
    <Bottombar/>
    {
    /**
     * Outlet, contains all PrivateLayout {children},
     * Directories:
     * Views -> Auth -> [Dashboard, profile, ...etc]
     */
    }

    <Outlet />

   </>
  );
}

export default PrivateLayout;
