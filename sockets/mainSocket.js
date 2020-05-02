const  io  = require("../servers").io;
const { ss, cs } = require('./socketsDoc');

let onlinePlayers = {};

// connection is specific event from socket io(build in not custom), Its a reserved event name
// socket is each one-one line connection
// io is for all sockets
// Anytime some connects to nameSpace to the socketIo server connection event to a nameSpace is trigerred!
// A socket always belongs to a nameSpace, If we dont provide a nameSpace the / is the default
io.on("connection", socket => {
  console.log("You have just connected, I am the server and i have socketPlayers");
  socket.emit("connection", {
    ss,
    cs,
    id: socket.id,
    connected: socket.connected
  });

  // Update Players// One Player has been just online
  socket.on(cs.root.UPDATE_PLAYERS, ({data:{name, password, token}, message}) => {
    // authentication operations
    const player = {[name]: { socketId: socket.id, name  }};
    Object.assign(onlinePlayers, player)
    console.log('Message from client', message);
    console.log("I am the Server and you just send me your personal data to make a pairing name-socketId, data, player",name, onlinePlayers);
    io.emit(ss.root.UPDATE_PLAYERS, { onlinePlayers });
  });

  // Create Game, player1 dare the player2
  socket.on(cs.root.CREATE_GAME, ({player1, player2})=>{

    //TODO: Check if player2 can accept the chalenge ==>Send requerst to player2==>Take the response=>If response is positive CREATE_GAME
    const newGameName = player1 + "-" + player2;
    const newGame1 = {[newGameName]:{name:newGameName}};
    const newGame2 = {...newGame1};

    newGame1[newGameName].opponentName = player2;// For player1
    newGame2[newGameName].opponentName = player1;// For player2
    socket.to(onlinePlayers[player2].socketId).emit(ss.root.UPDATE_GAME, newGame2)
    io.to(onlinePlayers[player1].socketId).emit(ss.root.UPDATE_GAME, newGame1)
    console.log('**************CREATE_GAME*******************', player1, player2)
    // Create Game
  });

  // disconnect event
  socket.on("disconnect", () => {
    console.log(`>>>>>Server Disconect a Client with id ${socket.id}`);
    const playerDisconeting = Object.values(onlinePlayers).find(({socketId})=>socketId == socket.id);
    console.log('----------------------AUTO-DISCONECTION-----------------------------------',playerDisconeting);
    playerDisconeting ? delete onlinePlayers[playerDisconeting.name] : null;
    console.log('++++++++++++++++++++++++++++++++++++++++++++',onlinePlayers)
    io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, { onlinePlayers });
    // io.emit('')
  });
  // manualyDisconnect
  socket.on(cs.root.MANULLY_DISCONNECT, () => {
    const playerDisconeting = Object.values(onlinePlayers).find(({socketId})=>socketId == socket.id);
    console.log('----------------------MANUAL DISCONNECTION-----------------------------------',playerDisconeting, onlinePlayers)
    delete onlinePlayers[playerDisconeting.name];
    console.log( `++++++++++++++++++++++++++++++++++++++++++++`,onlinePlayers);
    io.of(ss.root.NAME).emit(ss.root.UPDATE_PLAYERS, { onlinePlayers });
    // io.emit('')
  });
});

module.exports = io ;