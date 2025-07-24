export default class Timer {
    constructor(game) {
        this.game = game;
        this.timeLeft = { 1: 300, 2: 300 }; // 5 دقائق
        this.timerInterval = null;
    }

    start() {
        this.timerInterval = setInterval(() => {
            this.timeLeft[this.game.currentPlayer]--;
            this.updateDisplay();
            
            if (this.timeLeft[this.game.currentPlayer] <= 0) {
                this.game.endGame(this.game.currentPlayer === 1 ? 2 : 1);
            }
        }, 1000);
    }

    updateDisplay() {
        const format = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };
        
        document.getElementById('timer').textContent = 
            `${format(this.timeLeft[1])} - ${format(this.timeLeft[2])}`;
    }
}
