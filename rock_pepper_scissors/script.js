let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice)
    {
        humanScore++;
        computerScore--;
    }
    else{
        humanScore--;
        computerScore++;
    }

    console.log(`So far the human score is ${humanScore}`);
    console.log(`So far the computer score is ${computerScore}`);
}



function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// let computerChoice = getComputerChoice();
// console.log(computerChoice);
// if (computerChoice === 0) {
//     console.log('Computer selected Rock')
// }

// else if (computerChoice === 1) {
//     console.log('Computer selected Pepper')
// }

// else {
//     console.log('Computer selected Scissors')
// }



function getHumanChoice() {
    return parseInt(prompt(' Please select a value for the game '));

}

console.log(getHumanChoice());

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);


    }

    if (humanScore > computerScore)
    {
        console.log('Human wins!');
    }
    else{
        console.log('Computer wins!');
    }
}

playGame()
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);