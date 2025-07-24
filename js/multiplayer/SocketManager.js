export default class SocketManager {
    constructor(game) {
        this.game = game;
        this.socket = io('https://your-game-server.com');
        this.setupSocketEvents();
    }

    setupSocketEvents() {
        this.socket.on('opponentMove', (move) => {
            this.game.board.executeMove(move);
            this.game.switchPlayer();
        });

        this.socket.on('gameStart', (playerSide) => {
            this.game.currentPlayer = playerSide;
        });
    }

    sendMove(move) {
        this.socket.emit('playerMove', move);
    }
}
