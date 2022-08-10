
// 1. get the references of html elements
const playerSelection = document.querySelector("#playerChoice");
const computerSelection = document.querySelector("#computerChoice");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resultText = document.querySelector("#roundResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const finalResultText = document.createElement("p");
let playerPoint=0;
let computerPoint=0;
let finalResult;   
let playerChoice;


// add event listener to each button 
choiceBtns.forEach(button => button.addEventListener('click', () =>
{
    
    if(playerPoint >= 5 || computerPoint >= 5){
        choiceBtns.forEach(button => button.removeEventListener('click', () => {
            playerChoice = button.textContent;
            playRound(playerChoice, computerPlay());
        }));
    } else {
        playerChoice = button.textContent;
        playRound(playerChoice, computerPlay());
    }
}));


function computerPlay(){
    let comp;
     // number from min to max: (Math.random() * (max - min + 1)) + min
     let randomNumber = Math.floor(Math.random() * (3 -1 + 1)+1);
     // if randomNumber === 1, return ROCK
     switch(randomNumber){
         case 1: 
         comp = "ROCK";
         break;
         case 2: 
         comp = "PAPER";
         break;
         case 3: 
         comp = "SCISSORS";
         break;
     }
     return comp;
}

function playRound(player, computer){
    
    let result = checkResult(player, computer);
    if(result.includes("You win!")){
        playerPoint++;
    } else if(result.includes("You lose!")){
        computerPoint++;
    }

    playerSelection.textContent = `Player: ${player}`;
    computerSelection.textContent = `Computer: ${computer}`;
    playerScore.textContent = `Player Score: ${playerPoint}`;
    computerScore.textContent =  `Computer Score: ${computerPoint}` ;
    resultText.textContent = `Result: ${result}`;
    finalResultText.textContent = checkWinner();
    gameDiv.appendChild(finalResultText);
    finalResultText.style.color = "blue";
    finalResultText.style.fontSize = '25px';
}



function checkResult(playerSelection, computerSelection){

    if(computerSelection === playerSelection){
        return "Draw!"
     }
    else if(computerSelection==="ROCK"){
       return  (playerSelection==="PAPER")? "You win! "+playerSelection+" beats "+computerSelection : "You lose! "+computerSelection+" beats "+playerSelection;
     }
    else if(computerSelection==="PAPER"){
        return  (playerSelection==="SCISSORS")? "You win! "+playerSelection+" beats "+computerSelection : "You lose! "+computerSelection+" beats "+playerSelection;
      }
    else if(computerSelection==="SCISSORS"){
        return  (playerSelection==="ROCK")? "You win! "+playerSelection+" beats "+computerSelection : "You lose! "+computerSelection+" beats "+playerSelection;
      }

}

function checkWinner(){
    let finalResult;
    if(computerPoint === 5 || playerPoint === 5){
        if(computerPoint === playerPoint){
            finalResult = "The game is a Tie!";
        } else if(computerPoint > playerPoint){
            finalResult = "You Lost the game to the Computer!";
        } else {
            finalResult = "You Win the game";
        }
    }
    return finalResult;
    
}
