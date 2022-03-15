/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import {Outlet} from 'react-router-dom';

const PrivateLayout = () =>{

  return (
   <>
    {
    /**
     * Outlet, contains all PrivateLayout {children},
     * Directories:
     * Views -> Auth -> [Dashboard, profile, ...etc]
     */
    }

    <Outlet/>

   </>
  );
}

export default PrivateLayout;
