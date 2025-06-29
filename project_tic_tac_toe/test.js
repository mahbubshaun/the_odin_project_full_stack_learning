// DOM Elements - Selecting game components from the HTML
const statusElement = document.querySelector('.status');         // Game status display
const gameBoardContainer = document.querySelector('#gameBoard'); // Game board container
const restartElement = document.querySelector('.restart-button'); // Restart button

// Factory function for creating the game board
function GameBoard() {
    // Board dimensions (3x3 grid)
    const rows = 3;
    const columns = 3;
    const board = [];  // 2D array representing the game board

    // Initialize the board with empty cells
    for (let i = 0; i < rows; i++) {
        board[i] = [];  // Create new row
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());  // Add new cell to the row
        }
    }

    // Public methods
    const getBoard = () => board;  // Get current board state

    // Place player's token on a specific cell
    const fillBoardCell = (row, column, player) => {
        board[row][column].addToken(player);
    };

    // Print current board state to console (for debugging)
    const printBoard = () => {
        const boardWithCellValues = board.map(boardRow => 
            boardRow.map(cell => cell.getValue())
        );
        boardWithCellValues.forEach(row => console.log(row));
    };

    // Reset the board to initial empty state
    const resetBoard = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];  // Reset row
            for (let j = 0; j < columns; j++) {
                board[i].push(Cell());  // Add new empty cells
            }
        }
        console.log('Board has been reset');
        printBoard();
    };

    // Expose public methods
    return { getBoard, fillBoardCell, printBoard, resetBoard };
}

// Factory function for individual board cells
function Cell() {
    let value = 0;  // 0 = empty, 'X' = player1, 'O' = player2

    // Place a player's token in the cell
    const addToken = (player) => {
        value = player;
    };

    // Get current value of the cell
    const getValue = () => value;

    return { addToken, getValue };
}

// Main game controller
function GameController(
    playerOneGame = 'Player one', 
    playerTwoGame = 'Player two'
) {
    const board = GameBoard();  // Create game board instance

    // Player configuration
    const players = [
        {
            name: playerOneGame,
            marker: 'X',    // Player 1 uses X
            winCount: 0,    // Track wins
        },
        {
            name: playerTwoGame,
            marker: 'O',    // Player 2 uses O
            winCount: 0
        }
    ];

    let activePlayer = players[0];  // Start with Player 1

    // Update win count for a player
    const updatePlayerWinCount = (player) => player.winCount++;

    // Switch turns between players
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        console.log(`${getActivePlayer().name}'s turn. `);
        statusElement.textContent = `${getActivePlayer().name}'s turn. `;
    };

    // Get current active player
    const getActivePlayer = () => activePlayer;

    // Start a new round
    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn. `);
    };

    // Print current board state
    const printCurrentBoard = () => board.printBoard();

    // Reset the game board
    const resetCurrentBoard = () => board.resetBoard();

    // Reset to first player
    const resetActivePlayer = () => {
        activePlayer = players[0];
    };

    // Check for win conditions
    const checkWinner = () => {
        const boardCells = board.getBoard();

        // Helper function to validate markers
        const isValidMarker = (value) => value === 'X' || value === 'O';

        // Check diagonal wins
        const isDiagonalWin = () => {
            const marker = getActivePlayer().marker;
            if (!isValidMarker(marker)) return false;

            // Top-left to bottom-right
            const diagonal1 = 
                boardCells[0][0].getValue() === marker &&
                boardCells[1][1].getValue() === marker &&
                boardCells[2][2].getValue() === marker;

            // Top-right to bottom-left
            const diagonal2 = 
                boardCells[0][2].getValue() === marker &&
                boardCells[1][1].getValue() === marker &&
                boardCells[2][0].getValue() === marker;

            return diagonal1 || diagonal2;
        };

        // Check horizontal wins
        const isHorizontalWin = () => {
            for (let i = 0; i < 3; i++) {
                const marker = boardCells[i][0].getValue();
                if (isValidMarker(marker) &&
                    marker === boardCells[i][1].getValue() &&
                    marker === boardCells[i][2].getValue()) {
                    return true;
                }
            }
            return false;
        };

        // Check vertical wins
        const isVerticalWin = () => {
            for (let i = 0; i < 3; i++) {
                const marker = boardCells[0][i].getValue();
                if (isValidMarker(marker) &&
                    marker === boardCells[1][i].getValue() &&
                    marker === boardCells[2][i].getValue()) {
                    return true;
                }
            }
            return false;
        };

        return isDiagonalWin() || isHorizontalWin() || isVerticalWin();
    };

    // Main gameplay function
    const playTurn = (row, column) => {
        board.fillBoardCell(row, column, getActivePlayer().marker);
    };

    // Get player's win count
    const getPlayerWinCount = (player) => player.winCount;

    // Initialize first round
    printNewRound();

    // Public API
    return {
        playTurn,
        resetActivePlayer,
        getActivePlayer,
        printCurrentBoard,
        resetCurrentBoard,
        getPlayerWinCount,
        switchPlayerTurn,
        updatePlayerWinCount,
        checkWinner
    };
}

// Initialize game
const game = GameController();

// Game board cell click handlers
const cells = Array.from(gameBoardContainer.children);
cells.forEach(cell => cell.addEventListener('click', function(event) {
    const clickedCell = event.target;  // Get clicked cell
    const row = clickedCell.getAttribute("data-row");
    const col = clickedCell.getAttribute("data-col");

    // Prevent overwriting occupied cells
    if (clickedCell.textContent === 'X' || clickedCell.textContent === 'O') {
        alert('Cell has been taken already!');
        return;
    }

    // Execute game turn
    game.playTurn(row, col);
    clickedCell.textContent = game.getActivePlayer().marker;

    // Check game status
    game.printCurrentBoard();
    if (game.checkWinner()) {
        statusElement.textContent = `${game.getActivePlayer().name} wins!`;
        game.updatePlayerWinCount(game.getActivePlayer());
        return;
    }

    // Continue to next turn
    game.switchPlayerTurn();
}));

// Restart button handler
restartElement.addEventListener('click', () => {
    // Clear UI board
    cells.forEach(cell => cell.textContent = '');
    
    // Reset game state
    game.resetCurrentBoard();
    game.resetActivePlayer();
    
    // Update UI elements
    if (restartElement.textContent === 'Start Game') {
        restartElement.textContent = 'Restart Game';
        statusElement.textContent = `${game.getActivePlayer().name}'s turn. `;
    } else {
        restartElement.textContent = 'Start Game';
        statusElement.textContent = '';
    }
});