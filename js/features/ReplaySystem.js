export default class ReplaySystem {
    constructor(game) {
        this.game = game;
        this.moves = [];
    }

    recordMove(move) {
        this.moves.push({
            move,
            boardState: JSON.parse(JSON.stringify(this.game.board.grid)),
            timestamp: Date.now()
        });
    }

    replay() {
        this.game.board.reset();
        this.moves.forEach((move, index) => {
            setTimeout(() => {
                this.game.board.executeMove(move.move);
            }, index * 1000);
        });
    }
}
