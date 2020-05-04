const { ss, cs } = require("../sockets/socketsDoc");
class Game {
    constructor(player1, player2, io) {
        this.player1 = player1.name;
        this.player2 = player2.name;
        this.name = this.player1 + '-' + this.player2 + '-' + Math.floor(Math.random() * 999999999);
        this.nameSpace = '/' + this.name;
        this.turn = player1;
        this.player1Game = { [this.name]: { name: this.name, nameSpace: this.nameSpace, opponent: player2 } };
        this.player2Game = { [this.name]: { name: this.name, nameSpace: this.nameSpace, opponent: player1 } };
        this.squares = Array(9).fill(null);
        io.to(player1.socketId).emit(ss.root.CREATE_GAME, this.nameSpace);
        io.to(player2.socketId).emit(ss.root.CREATE_GAME, this.nameSpace);
        io.of(this.nameSpace).on('connection', (socket)=>{
            console.log(`A socket -------------${socket.id} is connected to nameSpace-------- ${this.nameSpace}`)
            socket.emit('connection',{});
            socket.emit(ss.root.UPDATE_GAME, {[this.name]:this})
        })
    }
}

module.exports = Game;