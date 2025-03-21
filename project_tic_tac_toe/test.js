const statusElement = document.querySelector('.status');
const gameBoardContainer = document.querySelector('#gameBoard');
const restartElement = document.querySelector('.restart-button')




function GameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i=0;i<rows;i++){
        board[i] = [];
        for(let j=0;j<columns;j++)
        {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const fillBoardCell = (row, column, player) => {
        board[row][column].addToken(player);
    }
   
    const printBoard = () =>{
        const boardWithCellValues = board.map(boardRow => boardRow.map(cell => cell.getValue()));
        boardWithCellValues.forEach(row => console.log(row))
    }

    const resetBoard = () =>{
        
        for(let i=0;i<rows;i++){
            board[i] = [];
            for(let j=0;j<columns;j++)
            {
                board[i].push(Cell());
            }
        }
        console.log('Board has been reset');
        printBoard();

    }
    return {getBoard, fillBoardCell, printBoard, resetBoard};

}

function Cell(){
    let value = 0;
    const addToken = (player) => value = player;
    const getValue = () => value;
    return {addToken, getValue};

}

function GameController(playerOneGame = 'Player one', playerTwoGame = 'Player two')
{
    const board = GameBoard();


    const players = [
        {
            name: playerOneGame,
            marker: 'X',
            winCount: 0,
        },
        {
            name: playerTwoGame,
            marker: 'O',
            winCount: 0
        }
    ];

    let activePlayer = players[0];

    const updatePlayerWinCount = (player) =>
    {
        return player.winCount++;

    }

    const switchPlayerTurn = () => 
    {
        activePlayer = activePlayer === players[0] ? players[1]: players[0];
        console.log(`${getActivePlayer().name}'s turn. `)
        statusElement.textContent = `${getActivePlayer().name}'s turn. `
        
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => 
    {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn. `)
    };

    const printCurrentBoard = () =>
    {
        board.printBoard();
    }

    const resetCurrentBoard = () =>
    {
        board.resetBoard();
    }

    const resetActivePlayer = () =>
    {
        activePlayer = players[0];
    }

    const checkWinner = () =>
    {
        const boardCells = board.getBoard();

    const isValidMarker = (value) => value === 'X' || value === 'O';

    const isDiagonalWin = () => {
        const marker = getActivePlayer().marker;
        if (!isValidMarker(marker)) return false;

        const isDiagonal1 = 
            boardCells[0][0].getValue() === marker &&
            boardCells[1][1].getValue() === marker &&
            boardCells[2][2].getValue() === marker;

        const isDiagonal2 = 
            boardCells[0][2].getValue() === marker &&
            boardCells[1][1].getValue() === marker &&
            boardCells[2][0].getValue() === marker;

        return isDiagonal1 || isDiagonal2;
    };

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
        // console.log (isDiagonalWin() || isHorizontalWin() || isVerticalWin());
        return isDiagonalWin() || isHorizontalWin() || isVerticalWin();
        
    }

    const playTurn = (row, column) => 
    {
        board.fillBoardCell(row, column, getActivePlayer().marker);
  

    };
    

    const getPlayerWinCount = (player)=>
    {
        return player.winCount;

    }

    printNewRound();

    return {playTurn, resetActivePlayer, getActivePlayer, printCurrentBoard, resetCurrentBoard, getPlayerWinCount, switchPlayerTurn, updatePlayerWinCount, checkWinner}


}

const game = GameController();

// game.playTurn(0, 2);
// game.playTurn(0, 1);
// game.playTurn(1, 1);
// game.playTurn(1, 0);
// game.playTurn(2, 0);
// console.log(game.getPlayerWinCount(game.getActivePlayer()))


// game.resetCurrentBoard()




// const board = GameBoard();

// board.fillBoardCell(0,0,1);
// board.fillBoardCell(1,1,2);

// board.printBoard();



const cells = Array.from(gameBoardContainer.children);
cells.forEach(cell => cell.addEventListener('click', function(event){

    // Get the clicked cell
    let clickedCell = event.target


    let row = clickedCell.getAttribute("data-row")
    let col = clickedCell.getAttribute("data-col")
    game.playTurn(row, col);
    

    if(statusElement.textContent === `${game.getActivePlayer().name}'s turn. `)
    {
        if (cell.textContent === 'X' || cell.textContent === 'O')
        {
            console.log('cell taken');
            alert('Cell has been taken already!')
            return;
        }else{
            cell.textContent = game.getActivePlayer().marker;
        }
        game.printCurrentBoard();
    console.log(game.checkWinner());
    if (game.checkWinner())
    {
        console.log(`${game.getActivePlayer().name} wins!`);
        statusElement.textContent = `${game.getActivePlayer().name} wins!`;
        game.updatePlayerWinCount(game.getActivePlayer())
        return;
    }
        game.switchPlayerTurn();
        
        // statusElement.textContent = `${game.getActivePlayer().name}'s turn. `
    }else{
        if (cell.textContent === 'X' || cell.textContent === 'O')
            {
                console.log('cell taken');
                alert('Cell has been taken already!')
                return;
            }else{
                cell.textContent = game.getActivePlayer().marker;
                
            }
            game.printCurrentBoard();
    console.log(game.checkWinner());
    if (game.checkWinner())
    {
        console.log(`${game.getActivePlayer().name} wins!`);
        statusElement.textContent = `${game.getActivePlayer().name} wins!`;
        game.updatePlayerWinCount(game.getActivePlayer())
        return;
    }
            game.switchPlayerTurn();
        
        // statusElement.textContent = game.getActivePlayer().name;
    }
}
));

restartElement.addEventListener('click', ()=>
{
    cells.forEach(cell => cell.textContent = '');
    game.resetCurrentBoard();
    if(restartElement.textContent === 'Start Game')
        {
            restartElement.textContent = 'Restart Game';
            statusElement.textContent = `${game.getActivePlayer().name}'s turn. `
            
            
            
            
        }else{
            restartElement.textContent = 'Start Game';
            game.resetActivePlayer();
            statusElement.textContent = ''
    
        }
        
        


});