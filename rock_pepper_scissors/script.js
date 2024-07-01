function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}
let computerChoice = getComputerChoice();
console.log(computerChoice);
if (computerChoice === 0 )
{
    console.log('Computer selected Rock')
}

else if (computerChoice === 1 )
{
    console.log('Computer selected Pepper')
}

else
{
    console.log('Computer selected Scissors')
}



function getHumanChoice()
{
    return parseInt(prompt(' Please select a value for the game '));

}

console.log(getHumanChoice());