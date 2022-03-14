/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/siteStyle.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store/index';

// initial app
const InitialApp = () =>{
 return(
  <Provider store={store}>
    <Router>
     <App/>
    </Router>
  </Provider>
 )
};

ReactDOM.render(
  <React.StrictMode>
    <InitialApp />
  </React.StrictMode>,
  document.getElementById('root')
);
