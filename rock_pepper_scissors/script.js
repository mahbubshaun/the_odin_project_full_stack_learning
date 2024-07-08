let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    // your code here!

    let humanAnswer = humanChoice.toLowerCase();

    switch (humanAnswer) {
        case 'rock':
            console.log('Human choosed \'rock\'');
            if (computerChoice === 0) {
                console.log('Both human & computer choosed same value');
            }


            if (computerChoice === 1) {
                console.log('Computer choosed Paper');
                console.log('Paper beats rock!, Computer Wins!');
                computerScore++;
            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Rock beats scissor!, Human Wins!');
                humanScore++;
            }
            break;

        case 'paper':
            console.log('Human choosed \'paper\'');
            if (computerChoice === 0) {
                console.log('Computer choosed Rock');
                console.log('Paper beats rock!, Human Wins!');
                humanScore++;
            }


            if (computerChoice === 1) {
                console.log('Computer choosed paper');
                console.log('Both human & computer choosed same value');
            
            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Scissor beats paper!, Computer Wins!');
                computerScore++;
            }
            break;

        case 'scissor':
            console.log('Human choosed \'scissor\'');
            if (computerChoice === 0) {
                console.log('Computer choosed rock');
                console.log('Rock beats scissor, Computer wins!');
                computerScore++;
            }


            if (computerChoice === 1) {
                console.log('Computer choosed Paper');
                console.log('Scissor beats paper!, Human Wins!');
                humanScore++;
            }

            if (computerChoice === 2) {
                console.log('Computer choosed scissor');
                console.log('Both human & computer choosed same value');
            }
            break

        default:
            break;
    }

    // if (humanChoice === computerChoice) {
    //     humanScore++;
    //     computerScore--;
    // }
    // else {
    //     humanScore--;
    //     computerScore++;
    // }

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
    return prompt(' Please select a value for the game');

}

console.log(getHumanChoice());

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();

        let computerSelection = getComputerChoice();

        playRound(humanSelection.toLowerCase(), computerSelection);


    }

    if (humanScore > computerScore) {
        console.log('Human wins!');
    }
    else {
        console.log('Computer wins!');
    }
}

playGame()
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);