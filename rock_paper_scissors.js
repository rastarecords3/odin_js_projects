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
let round = 1

// create a function to play a round
function playRound() {
    // get the choices
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    // return {humanChoice, computerChoice};
    if (humanChoice === computerChoice) {console.log(`You chose ${humanChoice}, the computer chose ${computerChoice} it's a draw.`);
        console.log(`Human score: ${humanScore} - Computer score: ${computerScore}`)}
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
            )
        {humanScore++;
        console.log(`You chose ${humanChoice}, the computer chose ${computerChoice} you win this round!`);
        console.log(`Human score: ${humanScore} - Computer score: ${computerScore}`)}
    else
        {computerScore++;
        console.log (`You chose ${humanChoice}, the computer chose ${computerChoice} you loose this round.`)
        console.log(`Human score: ${humanScore} - Computer score: ${computerScore}`)}
    return {humanChoice, computerChoice};
}

// function to play a game of 5 rounds
function playGame() {
    while (round <= 5) {
        playRound();
        round++;
    }
    let finalMessage = '';
    if (humanScore > computerScore)
        {finalMessage = 'you win!!'}
    else if (humanScore == computerScore)
        {finalMessage = 'it\'s a draw.'}
    else
        {finalMessage = 'you loose'}

    console.log('---GAME OVER---');
    return (`Final Score: Human ${humanScore} - Computer ${computerScore} - ${finalMessage}`)
}