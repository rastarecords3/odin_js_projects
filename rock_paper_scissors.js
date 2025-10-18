// use the DOM to insert the dynamic message
const body = document.body
const displayMessage = document.createElement("div")
displayMessage.textContent = "Play a game with me"
body.appendChild(displayMessage)

// set up button click event listeners to retrieve the user choice and pass it to the playround function
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id
        console.log(`You chose ${humanChoice}`)
        playRound(humanChoice)
    })
})

// array of winning combinations
const winMap = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
};

// declare score variables
let humanScore = 0
let computerScore = 0
let round = 1

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

// function to play a round with humanChoice as a parameter 
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`)
    let message = ''
    
    if (humanChoice === computerChoice) {
        message = `You chose ${humanChoice}, the computer chose ${computerChoice} it's a draw.`
    }
    else if (winMap[humanChoice] === computerChoice) {
        humanScore++;
        message = `You chose ${humanChoice}, the computer chose ${computerChoice} you win this round!`
    }
    else
        {computerScore++;
        message = `You chose ${humanChoice}, the computer chose ${computerChoice} you lose this round.`
    }

    displayMessage.innerHTML = `Round: ${round} ${message}<br>(Human: ${humanScore} - Computer: ${computerScore})`;
    console.log(`Round: ${round}`)

    if (round <5) {
        round++
    }
    else {
        endGame(humanScore, computerScore, message)
    }
}

// function to end the game after 5 rounds and declare a winner
function endGame(humanScore, computerScore, message) {
    let finalMessage = ''
    if (humanScore > computerScore)
    {finalMessage = 'you win!!'}
    else if (humanScore == computerScore)
    {finalMessage = 'it\'s a draw.'}
    else
    {finalMessage = 'it\'s a draw.'}

    console.log(`${message}\n---GAME OVER---\nFinal Score: Human ${humanScore} - Computer ${computerScore} - ${finalMessage}`)
    displayMessage.innerHTML = `Round: ${round} ${message}<br>Final Score: Human ${humanScore} - Computer ${computerScore} - ${finalMessage}<br>---GAME OVER---`
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.disabled = true
    })
}