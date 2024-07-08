let humanScore = 0;
let computerScore = 0;

const playerScoreRef = document.querySelector('#player-score');
const computerScoreRef = document.querySelector('#computer-score');
const resutRef = document.querySelector('#result');

function playRound(humanChoice, computerChoice) {
    // your code here!

    let humanAnswer = humanChoice.toLowerCase();

    switch (humanAnswer) {
        case 'rock':
            console.log('Human choosed \'rock\'');
            if (computerChoice === 0) {
                resutRef.textContent = 'Its a Draw!';
                console.log('Both human & computer choosed same value');
            }


            if (computerChoice === 1) {
                console.log('Computer choosed Paper');
                console.log('Paper beats rock!, Computer Wins!');
                resutRef.textContent = 'Paper beats rock!, Computer Wins!';
                computerScore++;
            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Rock beats scissor!, Human Wins!');
                resutRef.textContent = 'Rock beats scissor!, Human Wins!';
                humanScore++;
            }
            break;

        case 'paper':
            console.log('Human choosed \'paper\'');
            if (computerChoice === 0) {
                console.log('Computer choosed Rock');
                console.log('Paper beats rock!, Human Wins!');
                resutRef.textContent = 'Paper beats rock!, Human Wins!';
                humanScore++;
            }


            if (computerChoice === 1) {
                console.log('Computer choosed paper');
                console.log('Both human & computer choosed same value');
                resutRef.textContent = 'Its a Draw!';

            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Scissor beats paper!, Computer Wins!');
                resutRef.textContent = 'Scissor beats paper!, Computer Wins!';
                computerScore++;
            }
            break;

        case 'scissor':
            console.log('Human choosed \'scissor\'');
            if (computerChoice === 0) {
                console.log('Computer choosed rock');
                console.log('Rock beats scissor, Computer wins!');
                resutRef.textContent = 'Rock beats scissor, Computer wins!';
                computerScore++;
            }


            if (computerChoice === 1) {
                console.log('Computer choosed Paper');
                console.log('Scissor beats paper!, Human Wins!');
                resutRef.textContent = 'Scissor beats paper!, Human Wins!';
                humanScore++;
            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Both human & computer choosed same value');
                resutRef.textContent = 'Its a Draw!';
            }
            break

        case 'reset':
            humanScore = 0;
            computerScore = 0;
            resutRef.textContent = 'Result will appear here!';

        default:
            break;
    }


    console.log(`So far the human score is ${humanScore}`);
    console.log(`So far the computer score is ${computerScore}`);
    playerScoreRef.textContent = humanScore;
    computerScoreRef.textContent = computerScore;

    if (humanScore === 5) {
        resutRef.textContent = 'Player wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        resutRef.textContent = 'Computer wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    playerScoreRef.textContent = humanScore;
    computerScoreRef.textContent = computerScore;

}


// function getResult()
// {
//     if (computerChoice === 0 && humanAnswer === 'rock') {
//         resutRef.textContent = 'Its a Draw!';
//         console.log('Both human & computer choosed same value');
//     }


//     if (computerChoice === 1) {
//         console.log('Computer choosed Paper');
//         console.log('Paper beats rock!, Computer Wins!');
//         resutRef.textContent = 'Paper beats rock!, Computer Wins!';
//         computerScore++;
//     }

//     if (computerChoice === 2) {
//         console.log('Computer choosed scissor');
//         console.log('Rock beats scissor!, Human Wins!');
//         resutRef.textContent = 'Rock beats scissor!, Human Wins!';
//         humanScore++;
//     }

// }


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
    return prompt(' Please select a value for the game');

}

// console.log(getHumanChoice());

function playGame() {
    // for (let i = 0; i < 5; i++) {


    // }
    let humanSelection = getHumanChoice();

    let computerSelection = getComputerChoice();

    playRound(humanSelection.toLowerCase(), computerSelection);


    if (humanScore > computerScore) {
        console.log('Human wins!');
    }
    else {
        console.log('Computer wins!');
    }
}

// playGame()
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');
const buttonReset = document.querySelector('#reset');

const buttonContainer = document.querySelector(".button-container");

console.log(buttonContainer);
buttonContainer.addEventListener('click', (event) => {
    let target = event.target;
    let computerSelection = getComputerChoice();
    switch (target.id) {
        case 'rock':
            console.log('Player choosed Rock');
            playRound(target.id, computerSelection);
            break;
        case 'paper':
            console.log('Player choosed Paper');
            playRound(target.id, computerSelection);
            break;
        case 'scissor':
            console.log('Player choosed scissor');
            playRound(target.id, computerSelection);
            break;
        case 'reset':
            console.log('Player choosed Reset');
            playRound(target.id, computerSelection);
            break;
    }
});



