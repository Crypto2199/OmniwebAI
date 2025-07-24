export default class Achievements {
    constructor(game) {
        this.game = game;
        this.unlocked = {
            firstWin: false,
            kingMaker: false,
            fastWinner: false
        };
    }

    check(context, data) {
        if (context === 'gameEnd' && !this.unlocked.firstWin) {
            this.unlock('firstWin', 'أحسنت! فوزك الأول!');
        }
        
        if (context === 'kingCreated' && !this.unlocked.kingMaker) {
            this.kingCount = (this.kingCount || 0) + 1;
            if (this.kingCount >= 3) {
                this.unlock('kingMaker', 'أنت صانع الملوك! 3 ترقيات');
            }
        }
    }

    unlock(id, message) {
        this.unlocked[id] = true;
        this.showToast(message);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.textContent = message;
        document.getElementById('achievements-toast').appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}
