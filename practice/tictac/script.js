const statusElement = document.querySelector('.status')
const gameBoardContainer = document.querySelector('#gameboard');
const restartElement = document.querySelector('.restart-button')

function Cell()
{
    let value = 0;
    const addToken = (player)=> value = player;
    const getValue = ()=> value;
    return {addToken, getValue}
}

function GameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    [[1,2,3], ]

    for(let i=0;i<rows; i++)
    {
        board[i] = [];
        for(let j=0; j<columns; j++)
        {
            board[i].push(Cell());
        }
    }

    const getBoard = ()=> board;
    const fillBoardCell = (row, column, player) =>
    {
        board[row][column].addToken(player);

    }

    const printBoard = ()=>{
        const boardWithCellValues = board.map(boardRow =>
            boardRow.map(cell=> cell.getValue()));
        
        boardWithCellValues.forEach(row => console.log(row));
    };
    

    const resetBoard = () =>
    {
        for(let i=0; i<rows; i++)
        {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(Cell());  // Add new empty cells
            }

        }

        console.log('Board has been reset');
        printBoard();
    }

    return { getBoard, fillBoardCell, printBoard, resetBoard };
}

function GameController(playerOneGame = 'Player one',
    playerTwoGame = 'Player two'
)
{
    const board = GameBoard();

    const players = [
        {
            name: playerOneGame,
            marker: 'X',   
            winCount: 0,
        }
        ,
        {
            name: playerTwoGame,
            marker: 'O',   
            winCount: 0,
        }
    ]

    let activePlayer = players[0];
    const updatePlayerWinCount = (player) => player.winCount++;
    const switchPlayerTurn = () =>
    {
        activePlayer = activePlayer === players[0] ? players[1]: players[0];
        console.log(`${getActivePlayer().name}'s turn`)
        statusElement.textContent = `${getActivePlayer().name}'s turn`;
    }

        // Get current active player
    const getActivePlayer = () => activePlayer;

    const printNewRound = ()=>
    {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn. `);
    }

    const printCurrentBoard = () => {
        console.log('Current board:');
        board.printBoard();
    }   

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

    const playTurn = (row, column) =>
    {
        board.fillBoardCell(row, column, getActivePlayer().marker);
    }

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

const game  = GameController();

const cells = Array.from(gameBoardContainer.children)

cells.forEach(cell => cell.addEventListener('click', function(event)
{
    const clickedCell = event.target;
    const row = clickedCell.getAttribute('data-row');
    const column = clickedCell.getAttribute('data-col');

    // Prevent overwriting occupied cells
    if (clickedCell.textContent === 'X' || clickedCell.textContent === 'O') {
        alert('Cell has been taken already!');
        return;
    }

    game.playTurn(row, column);
    clickedCell.textContent = game.getActivePlayer().marker;

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