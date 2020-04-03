const expressServer = require("./app");
const socketio = require("socket.io");

// the second parameter object is the default. Serves the client io api
const io = socketio(expressServer, {
  path: "/socket.io",
  serveClient: true
});

// sock Descrition for increasing destriction /Server Name Spaces with Events / serverSocekt, clientSocket
// We keep the socket.io build in events with strings and we declare the custom events within the related spaceName
//  for increasing the self Documentation and restriction of dataUsage
const ss = {
  root: {
    NAME: "/",
    UPDATE_PLAYERS: "UPDATE_PLAYERS",
    CONNECTION_REPLY: "CONNECTION_REPLY",
    REGISTER: "REGISTER"
  }
};
// Client Name Spaces with Events
const cs = {
  root: {
    NAME: "/",
    CONNECTION_REPLY: "CONNECTION_REPLY",
    REGISTER: "REGISTER"
  }
};

let players = [];

// connection is specific event from socket io(build in not custom), Its a reserved event name
// socket is each one-one line connection
// io is for all sockets
// Anytime some connects to nameSpace to the socketIo server connection event to a nameSpace is trigerred!
// A socket always belongs to a nameSpace, If we dont provide a nameSpace the / is the default
io.on("connection", socket => {
  const player = { id: socket.id };
  players = [...players, player];
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
  // disconnet event
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} disconnected`);
    players = players.filter(player => player.id !== socket.id);
    io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, { players });
    // io.emit('')
  });
});
