export default class Board {
    constructor() {
        this.grid = this.createInitialBoard();
        this.selectedPiece = null;
    }

    createInitialBoard() {
        // تهيئة لوحة اللعب
        const grid = Array(8).fill().map(() => Array(8).fill(null));
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 !== 0) {
                    if (row < 3) grid[row][col] = { player: 2, isKing: false };
                    if (row > 4) grid[row][col] = { player: 1, isKing: false };
                }
            }
        }
        return grid;
    }

    render() {
        const boardElement = document.getElementById('board');
        boardElement.innerHTML = '';
        
        this.grid.forEach((row, rowIndex) => {
            row.forEach((piece, colIndex) => {
                const square = document.createElement('div');
                square.className = `square ${(rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'}`;
                square.dataset.row = rowIndex;
                square.dataset.col = colIndex;
                
                if (piece) {
                    const pieceElement = document.createElement('div');
                    pieceElement.className = `piece ${piece.player === 1 ? 'red' : 'black'} ${piece.isKing ? 'king' : ''}`;
                    square.appendChild(pieceElement);
                }
                
                boardElement.appendChild(square);
            });
        });
    }
}
