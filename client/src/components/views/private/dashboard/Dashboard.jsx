/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../../layouts/navigations/Sidebar';
import Bottombar from '../../../layouts/navigations/Bottombar';

const Dashboard = (props) => {
     //

    React.useEffect(()=>{

    },[]);

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
        </>
    );
};
Dashboard.propTypes = {

};

export default Dashboard;