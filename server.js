const express = require('express');
const app = express();
const socketio = require('socket.io');

// Serve the static files from the React app
app.use(express.static(__dirname+'/build'));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(__dirname+'/build');
});
const port = process.env.PORT || 5000;

// Get expressServer and pass it to socketServer
const expressServer = app.listen(port);
console.log("App is listening on port " + port);

const io =socketio(expressServer);









