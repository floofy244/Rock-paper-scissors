var playerScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(playerPick) {
  
  computerPick = getcomputerPick();
  
  document.getElementById('status').innerHTML = "<p>You picked <strong>" + playerPick + "</strong>. Ultron picked <strong>" + computerPick + "</strong>.</p>";
  
  if(playerPick == 'rock') {
    if(computerPick == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPick == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPick == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      playerScore++;
    }
  } else if (playerPick == 'paper') {
    if(computerPick == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      playerScore++;
    } else if (computerPick == 'paper') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPick == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }  
  } else if (playerPick == 'scissors') {
    if(computerPick == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPick == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      playerScore++;
    } else if (computerPick == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
  }
  
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerScore').innerHTML = computerScore;

  if(playerScore == 5 || computerScore == 5){
    gameOver();
  }
  
}

function getcomputerPick() {
  var choices = ['rock', 'paper', 'scissors'];
  var pick = choices[Math.floor(Math.random() * 3)];
  return pick;
}

function gameOver(){
  let resetButton = document.getElementById('rst')
  resetButton.style.display = 'inline-block';
  if(playerScore == 5){
    document.getElementById('status').innerHTML = "<p>You win! :)</p>";
    document.getElementById('status').innerHTML += "<p>Play again?</p>";
    document.getElementById('rock').onclick = null;
    document.getElementById('paper').onclick = null;
    document.getElementById('scissors').onclick = null;
  } else if (computerScore == 5){
    document.getElementById('status').innerHTML = "<p>You lose. :(</p>";
    document.getElementById('status').innerHTML += "<p>Play again?</p>";
    document.getElementById('rock').onclick = null;
    document.getElementById('paper').onclick = null;
    document.getElementById('scissors').onclick = null;
  }
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
}