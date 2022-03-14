/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
/**
 * Public Views
 * !Public view pages should be imported here and add with public view categories
 */
import Login from '../components/views/public/auth/Login';
import Register from '../components/views/public/auth/Register';
import Reset from '../components/views/public/auth/Reset';
import Forgot from '../components/views/public/auth/Forgot';
import Notify from '../components/views/public/auth/Notify';
import Verify from '../components/views/public/auth/Verify';

/**
 * Private Views
 * Authorized pages [views] should be imported here and add with private view categories
 */
import Dashboard from '../components/views/private/dashboard/Dashboard';


/**
 *  Layouts [Private, Public]
 *  Contains - [Outlet, Navigations ... etc]
 */
import PrivateLayout from '../components/layouts/PrivateLayout';
import PublicLayout from '../components/layouts/PublicLayout';

/**
 *  Authorized Routes [PrivateRoute]
 *  Checks whether personel is authorized or not ... or will redirect to login page ... 
 *  You can change authorization methods for pages [views] here from [PrivateRoute]
 */
import PrivateRoute from './PrivateRoute';

const routes = [
/**
 *  Public Views
 *  Directories: 
 *  Views -> Auth -> [Login, Register, Forgot, Reset, Notify, Verify]
 */ 
{
path: "/",
element: <PublicLayout />,
children: [
    { index: true, element: <Login /> },
    {
        path: "/auth/login",
        element: <Login />,
    },
    { 
        path: "/auth/register", 
        element: <Register /> 
    },
    { 
        path: "/auth/notification/:id", 
        element: <Notify /> 
    },
    { 
        path: "/auth/forgot-password", 
        element: <Forgot /> 
    },
    { 
        path: "/auth/reset-password", 
        element: <Reset /> 
    },
    { 
        path: "/auth/verify-email/:id/:token", 
        element: <Verify /> 
    },
    ],
},

/**
 *  Private Views
 *  Directories: 
 *  Views -> Private -> [Dashboard, Profile, ... etc]
 */ 
{
    path: "/user",
    element: <PrivateLayout />,
    children: [
        { index: true, element: <PrivateRoute><Dashboard /></PrivateRoute> },
        {
            path: "/user/dashboard",
            element: <PrivateRoute><Dashboard /></PrivateRoute>,
        }, 
    ],
},
];
export default routes;