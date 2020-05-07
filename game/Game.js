const { ss, cs } = require("../sockets/socketsDoc");
class Game {
    constructor(player1, player2, io) {
        this.player1Name = player1.name;
        this.player2Name = player2.name;
        this.name = this.player1Name + '-' + this.player2Name + '-' + Math.floor(Math.random() * 999999999);
        this.nameSpace = '/' + this.name;
        this.turn = this.player1Name;
        this.squares = Array(9).fill(null);
        let connectedSockets = 0;
        const player1SocketId = this.nameSpace + "#" + player1.socketId;
        const player2SocketId = this.nameSpace + "#" + player2.socketId;
        let round = 1;//we have 9squares = 9 rounds
        const updateGame = ()=>{
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^UPDATE-GGAAAAMMEEEE!!')
                io.of(this.nameSpace).to(player1SocketId).emit(ss.root.UPDATE_GAME, {[this.name]:{...this, myName:this.player1Name,enemyName:this.player2Name}})
                io.of(this.nameSpace).to(player2SocketId).emit(ss.root.UPDATE_GAME, {[this.name]:{...this, myName:this.player2Name,enemyName:this.player1Name}})
        }
        io.to(player1.socketId).emit(ss.root.CREATE_GAME, this.nameSpace);
        io.to(player2.socketId).emit(ss.root.CREATE_GAME, this.nameSpace);
        io.of(this.nameSpace).on('connection', (socket)=>{
            connectedSockets++;
            console.log(`A socket -------------${socket.id} is connected to nameSpace-------- ${this.nameSpace}`)
            socket.emit('connection',{});
            if(connectedSockets === 2) updateGame();
            socket.on(cs.root.UPDATE_GAME, ({squareIndex})=>{
                const squareContent = round % 2 === 0 ? "o" : "x";
                round++;
                this.squares[squareIndex] = squareContent;
                this.turn = socket.id === player1SocketId ? this.player2Name : this.player1Name;
                updateGame();
            });
        });
    }
}

module.exports = Game;