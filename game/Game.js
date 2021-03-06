const calculateWinner = require('./calculateWinner');
const { ss, cs } = require("../sockets/socketsDoc");

class Game {
    constructor(player1, player2, io) {
        this.player1 = player1;
        this.player2 = player2;
        this.winner = false;
        this.winnerLine = null;
        this.name = this.player1.name + '-' + this.player2.name + '-' + Math.floor(Math.random() * 999999999);
        this.nameSpace = '/' + this.name;
        this.turn = this.player1.name;
        this.squares = Array(9).fill(null);
        this.winnerData = { winner: null, winnerLine: null };
        let connectedSockets = 0;
        const player1SocketId = this.nameSpace + "#" + player1.socketId;
        const player2SocketId = this.nameSpace + "#" + player2.socketId;
        let round = 1;//we have 9squares = 9 rounds
        const updateGame = ()=>{
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^UPDATE-GGAAAAMMEEEE!!', player1, player2)
                io.of(this.nameSpace).to(player1SocketId).emit(ss.root.UPDATE_GAME, {[this.name]:{...this, myName:this.player1.name,enemyName:this.player2.name}})
                io.of(this.nameSpace).to(player2SocketId).emit(ss.root.UPDATE_GAME, {[this.name]:{...this, myName:this.player2.name,enemyName:this.player1.name}})
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
                const {winner, winnerLine} = calculateWinner(this.squares);
                this.winnerData = { winner: winner ? winner === 'x' ? this.player1.name : this.player2.name : null, winnerLine };
                this.turn = socket.id === player1SocketId ? this.player2.name : this.player1.name;
                updateGame();
            });
        });
    }
}

module.exports = Game;