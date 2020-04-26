const socketio = require("socket.io");
const expressServer = require("./app");
const { ss, cs } = require('./socketsDoc');
// the second parameter object is the default. Serves the client io api
const io = socketio(expressServer, {
  path: "/socket.io",
  serveClient: true
});


let players = [];

// connection is specific event from socket io(build in not custom), Its a reserved event name
// socket is each one-one line connection
// io is for all sockets
// Anytime some connects to nameSpace to the socketIo server connection event to a nameSpace is trigerred!
// A socket always belongs to a nameSpace, If we dont provide a nameSpace the / is the default
io.on("connection", socket => {
  const player = { id: socket.id };
  players = [...players, player];
  console.log("You have just connected, I am the server and i have socketPlayers", players);
  io.emit(ss.root.UPDATE_PLAYERS, { players });
  socket.emit(ss.root.CONNECTION_REPLY, {
    ss,
    cs,
    id: socket.id,
    connected: socket.connected
  });
  socket.on(cs.root.CONNECTION_REPLY, data => {
    console.log("client has replied", data);
  });
  socket.on(cs.root.REGISTER, data => {
    console.log("client has completed the form", data);
    const checkingPassed = true;
    socket.emit(ss.root.REGISTER, {
      checkingPassed: checkingPassed ? "Done" : "Fail"
    });
  });
  // disconnect event
  socket.on("disconnect", () => {
    console.log(`>>>>>>Server Disconect a Client with id ${socket.id}`);
    players = players.filter(player => player.id !== socket.id);
    io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, { players });
    // io.emit('')
  });

  // manualyDisconnect
  // disconnect event
  socket.on(cs.root.MANULLY_DISCONNECT, () => {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>Manualy disconnection ${socket.id}`);
    players = players.filter(player => player.id !== socket.id);
    io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, { players });
    // io.emit('')
  });
});
