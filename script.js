//Global variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Task 1
//This function returns a random integer between 0 and 9
const generateTarget = () => {
    const randomNum = Math.floor(Math.random() * 9);
    return randomNum;
}

//Tast 2
//This function determines which guess is closest to the target number
const compareGuesses = (humGuess, compGuess, target) => {
    let humDistance = Math.abs(humGuess - target);
    let comDistance = Math.abs(compGuess - target);

    if(humGuess === compGuess) {
        return true;
    }   else if(humDistance < comDistance) {
        return true;
    }   else if(humDistance > comDistance) {
        return false;
    }

}

//Task 3
//This function correctly increases the winner's score after each round
const updateScore = (str) => {
    if(str === 'human') {
        humanScore++;
    } else if(str === 'computer') {
        computerScore++;
    } else {
        console.log('String is an invalid type! It must be either human or computer');
    }
}

//Task 4
//This function used to update the round number after each round
function advanceRound() {
    currentRoundNumber++;
}