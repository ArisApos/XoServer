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
// The server is listening in port 5000 and the socket.io is listening in server
const expressServer = app.listen(port);
console.log("App is listening on port " + port);

// the second parameter object is the default. Serves the client io api
const io =socketio(expressServer, {
    path: '/socket.io',
    serveClient: true
});

// connection is specific event from socket io(build in not custom), Its a reserved event name
// socket is each one-one line connection
// io is for all sockets
// Anytime some connects to nameSpace to the socketIo server connection event to a nameSpace is trigerred!
// A socket always belongs to a nameSpace, If we dont provide a nameSpace the / is the default
io.on('connection', (socket)=> {

    socket.emit('sConnectionReply', {msg:'Hello baby from socketIo server'});
    socket.on("cConnectionReply", data => {
      console.log("client has replied", data);
    });
    // disconnet event
    socket.on("disconnect", () => console.log("Client disconnected"));
} );






