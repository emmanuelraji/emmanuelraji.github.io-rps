// Play game functions 
document.getElementById('rock').addEventListener('click', () => {
    let rock = "rock";
    let computerChoice = getComputerChoice();
    document.getElementById('computer-choice').innerHTML = 'Computer chose: ' + computerChoice;
    document.getElementById('result').innerHTML = determineWinner(rock, computerChoice);
    document.getElementById('score').innerHTML = 'Score: ' + score;
})

document.getElementById('paper').addEventListener('click', () => {
    let paper = "paper";
    let computerChoice = getComputerChoice();
    document.getElementById('computer-choice').innerHTML = 'Computer chose: ' + computerChoice;
    document.getElementById('result').innerHTML = determineWinner(paper, computerChoice);
    document.getElementById('score').innerHTML = 'Score: ' + score;

})

document.getElementById('scissors').addEventListener('click', () => {
    let scissors = "scissors"; 
    let computerChoice = getComputerChoice();
    document.getElementById('computer-choice').innerHTML = 'Computer chose: ' + computerChoice;
    document.getElementById('result').innerHTML = determineWinner(scissors, computerChoice);
    document.getElementById('score').innerHTML = 'Score: ' + score;

})

// Get Computer's choice 
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
    
}

// Determine the winner with score count
let score = 0;
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game is a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            score++;
            return 'You won!';
        } else {
            score--
            return 'Computer won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            score++
            return 'You won!';
        } else {
            score--
            return 'Computer won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            score--
            return 'Computer won!';
        } else {
            score++
            return 'You won!';
        }
    }
}




