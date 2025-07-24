import Board from './Board.js';
import AIPlayer from '../ai/AIPlayer.js';
import Timer from '../features/Timer.js';
import Achievements from '../features/Achievements.js';

export default class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = 1;
        this.gameMode = 'human'; // human, ai, online
        this.ai = new AIPlayer(this);
        this.timer = new Timer(this);
        this.achievements = new Achievements(this);
        this.init();
    }

    init() {
        this.board.render();
        this.timer.start();
        this.setupEventListeners();
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        if (this.gameMode === 'ai' && this.currentPlayer === 2) {
            this.ai.makeMove();
        }
    }

    endGame(winner) {
        this.timer.stop();
        this.achievements.check('gameEnd', { winner });
        alert(`الفائز هو: ${winner === 1 ? 'اللاعب الأحمر' : 'اللاعب الأسود'}`);
    }
}
