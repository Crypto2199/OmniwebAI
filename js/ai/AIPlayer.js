import MediumAI from './difficulty/MediumAI.js';
import HardAI from './difficulty/HardAI.js';

export default class AIPlayer {
    constructor(game) {
        this.game = game;
        this.setDifficulty('medium');
    }

    setDifficulty(level) {
        switch (level) {
            case 'easy': this.strategy = new EasyAI(); break;
            case 'medium': this.strategy = new MediumAI(); break;
            case 'hard': this.strategy = new HardAI(); break;
        }
    }

    makeMove() {
        const move = this.strategy.calculateMove(this.game.board.grid);
        if (move) {
            setTimeout(() => {
                this.game.board.executeMove(move);
                this.game.switchPlayer();
            }, 1000);
        }
    }
}
