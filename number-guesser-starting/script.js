let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return (Math.floor(Math.random()*100) % 10);
}

function compareGuesses(user, computer, secret) {
  if(Math.abs(user -secret) <= Math.abs(computer -secret))
    return true;
  else
    return false;
}

function updateScore(str) {
  if (str === 'human')
    humanScore += 1;
  else
    computerScore +=1;
}

const advanceRound() {

	currrentRoundNumber++; 
}


