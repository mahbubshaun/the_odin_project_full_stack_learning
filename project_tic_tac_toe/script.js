

// const myObject = {
//     property: 'value ',
//     otherProperty: 77,
//     "obnoxious property": function()
//     {
//         //do something here
//     }
// };

// myObject.property;

// myObject["obnoxious property"];

// const playerOne = {
//     name: 'player one',
//     marker: '0'
// };

// const playerTwo = {
//     name: 'player two',
//     marker: 'X'
// };

// function printName(player)
// {
//     console.log(player.name);



// }

// printName(playerOne);
// printName(playerTwo);

// function gameOver(winningPlayer)
// {
//     console.log(winningPlayer.name + ' wins!');
// }



// //object constructors

// function Player(name, marker)
// {
//     this.name = name;
//     this.marker= marker;
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }

// const player1 = new Player('player1', 'X');

// const player2 = new Player('player2', '0');

// console.log(player1.name);

// player2.sayName();

function player(name, marker)
{
    return {name, marker}
}

const gameBoard = (function (){
    const restart = ()=> console.log('game restarted');
    const playGame = function(player, player2)
    {
        console.log('game on!');
        console.log(player.name);
        console.log(player2.name);

    }
    const gameBoardContainer = document.querySelector('#gameBoard');
    const cells = Array.from(gameBoardContainer.children);
    console.log(cells);


    const playerTurn = document.querySelector('.status');
    playerTurn.textContent = 'player1';
    cells.forEach(cell => cell.addEventListener('click', function(){
        if(playerTurn.textContent === 'player1')
        {
            if (cell.textContent === 'X' || cell.textContent === '0')
            {
                console.log('cell taken');
                return;
            }else{
                cell.textContent = 'X';

            }
            
            playerTurn.textContent = 'player2';
        }else{
            if (cell.textContent === 'X' || cell.textContent === '0')
                {
                    console.log('cell taken');
                    return;
                }else{
                    cell.textContent = '0';
    
                }
                
            
            playerTurn.textContent = 'player1';
        }
    }
    ));

    return {restart, playGame}

})();

const player1 = player('player1', 'X');
const player2 = player('player2', '0');
gameBoard.playGame(player1, player2);