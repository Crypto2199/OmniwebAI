export default class UIManager {
    constructor(game) {
        this.game = game;
        this.setupControls();
    }

    setupControls() {
        document.getElementById('ai-btn').addEventListener('click', () => {
            this.game.gameMode = 'ai';
            this.showDifficultyMenu();
        });
        
        document.getElementById('multiplayer-btn').addEventListener('click', () => {
            this.game.gameMode = 'online';
            this.showMultiplayerMenu();
        });
    }

    showDifficultyMenu() {
        // عرض قائمة اختيار مستوى الصعوبة
    }
}
