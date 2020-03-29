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


// sock Descrition for increasing destriction /Server Name Spaces with Events / serverSocekt, clientSocket 
// We keep the socket.io build in events with strings and we declare the custom events within the related spaceName
//  for increasing the self Documentation and restriction of dataUsage
 const ss = { 
   root: { NAME: '/', UPDATE_PLAYERS: 'UPDATE_PLAYERS', CONNECTION_REPLY: 'CONNECTION_REPLY', REGISTER: 'REGISTER' }
  };
// Client Name Spaces with Events
 const cs = { 
   root: { NAME: '/', CONNECTION_REPLY: 'CONNECTION_REPLY', REGISTER: 'REGISTER' }
  };
 


let players = [];

// connection is specific event from socket io(build in not custom), Its a reserved event name
// socket is each one-one line connection
// io is for all sockets
// Anytime some connects to nameSpace to the socketIo server connection event to a nameSpace is trigerred!
// A socket always belongs to a nameSpace, If we dont provide a nameSpace the / is the default
io.on('connection', (socket)=> {
    const player = {id:socket.id}
    players = [...players, player];
    io.emit(ss.root.UPDATE_PLAYERS, {players});
    socket.emit(ss.root.CONNECTION_REPLY, {id: socket.id, connected: socket.connected});
    socket.on(cs.root.CONNECTION_REPLY, data => {
      console.log("client has replied", data);
    });
    socket.on(cs.root.REGISTER, data => {
      console.log("client has completed the form", data);
      const checkingPassed = true;
      socket.emit(ss.root.REGISTER,{checkingPassed : checkingPassed ? 'Done':'Fail'})
    });
    // disconnet event
    socket.on("disconnect", () =>{
      console.log(`Client ${socket.id} disconnected`);
      players = players.filter(player => player.id !== socket.id);
      io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, {players});
      // io.emit('')
    });
} );






