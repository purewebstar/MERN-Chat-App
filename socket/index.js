/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------


//------------------------------------------------------------------
const Socket = require('socket.io');

var socket = (server) =>{
    /**
     *  io Configuration
     */
    const io = Socket(server,  {
        cors: {
            origin: `${process.env.ORIGIN_ACCESS_HOST}`,
            methods: ['GET', 'POST','PATCH', 'PUT', 'DELETE']
        }
    });

    /**
     *  On Connection
     */
    io.on('connection', (socket) => {
        console.log(socket.id)

        // Disconnected
        socket.on('disconnect', () => {
           
        });
        // Connected
        socket.on('connected', (user) => {
           
        });

    });

}

module.exports = socket;