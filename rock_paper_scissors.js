// function to get computer's choice of rock/paper/scissors
function getComputerChoice() {
    // get a random integer from 1 to 3
    const choice = Math.floor(Math.random() *3) +1;
    // console.log(choice);
    switch (choice) {
        case 1: return 'rock'
        case 2: return 'paper'
        case 3: return 'scissors'
        default: return 'error'
    }
}

// function to get human's choice of rock/paper/scissors
function getHumanChoice() {
    const choice = prompt('Enter your choice of rock/paper/scissors','')
    return choice
}

// declare score variables
let humanScore = 0
let computerScore = 0

// create a function to play a round
function playRound() {
    // get the choices
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    // return {humanChoice, computerChoice};
    if (humanChoice === computerChoice) {console.log(`You chose ${humanChoice}, the computer chose ${computerChoice} it's a draw.`)}
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
            )
        {console.log(`You chose ${humanChoice}, the computer chose ${computerChoice} you win this round!`)}
    else
        {console.log (`You chose ${humanChoice}, the computer chose ${computerChoice} you loose this round.`)}
    return {humanChoice, computerChoice};
}