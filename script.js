
// 1. create a function called computer play
// To gte a random number between 2 values inclusive,
// Math.random() * (max - min + 1) + min to create random numbers from min to max

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*(3 - 1 + 1)+1) ;
    let result='';
    if(randomNumber === 1 ){
        result = 'rock';
    } else if (randomNumber === 2){
        result = 'paper';
    } else {
        result = 'scissors';
    }
    return result;
}



// 2. create a function that play a single round 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winningString = '';
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        winningString = 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        winningString = 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        winningString = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        winningString = 'You Win! Paper beats Rock';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        winningString = 'You Win! Scissors beats Paper';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        winningString = 'You Win! Rock beats Scissors';
    } else if (playerSelection ===  computerSelection) {
        winningString = "It's tie! "+ playerSelection + " ties with "+computerSelection;
    }
    return winningString;
} 
    /* const playerSelection = 'rock';
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection)); */


// 4. Write a game function and report who wins
 function game() {
    let playerPoint=0;
    let computerPoint=0;
    let winner = '';
    for(let i=0; i <5; i++){
       let playerSelection = window.prompt('Enter you choice: ');
       let computerSelection = computerPlay();
       let winningDeclaration =  playRound(playerSelection, computerSelection);
       console.log(winningDeclaration);
        if(winningDeclaration.includes('You Win')){
            playerPoint++;
        } else if (winningDeclaration.includes('You Lose')){
            computerPoint++;
        }
    }
    if(playerPoint > computerPoint){
        winner = 'Game over. You won!';
    } else if (playerPoint < computerPoint) {
        winner = 'Game over. You lose!';
    } else {
        winner = "Game over. You ties with computer!";
    }
    return winner;
 }