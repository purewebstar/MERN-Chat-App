/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------


//------------------------------------------------------------------

require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
// api routes
const routes = require('./routes');
// schedule jobs
const VerifyEmailJobs = require('./schedules/VerifyEmailJobs');
const AccountJobs = require('./schedules/AccountJobs');
// socket
const socket = require('./socket');
const initMongoDb = require('./config/initMongoDb');

// PORT
const PORT = process.env.PORT || 4000;
// Initializing Database
initMongoDb(mongoose);

app.use(cors());
app.use(
  helmet({ 
    contentSecurityPolicy: false,
    frameguard: true 
  })
); 

// schedule jobs
VerifyEmailJobs(app);
AccountJobs(app);
// api routes
app.use(routes);

app.use(compression()); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); 
app.use(passport.initialize());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});
server.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
