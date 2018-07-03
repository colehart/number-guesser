var randomNumber = 0;
var userInput = document.querySelector('#userGuess');
var clearButton = document.querySelector('.right-btn');
var guessButton = document.querySelector('.left-btn');
var resetButton = document.querySelector('.big-btn');

window.addEventListener('load', generateAnswer);
guessButton.addEventListener('click', checkGuess); 
resetButton.addEventListener('click', restartGame);
clearButton.addEventListener('click', clearInput);

function generateAnswer() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess(event) {
  event.preventDefault();
  var guess = parseInt(userInput.value);
  document.querySelector('.your-guess').innerText = guess;
  if (guess < randomNumber) {
    document.querySelector('.message').innerText = 'That is too low';
  } else if (guess > randomNumber) {
    document.querySelector('.message').innerText = 'That is too high';
  } else {
    document.querySelector('.message').innerText = 'BOOM';
  }
}

function clearInput() {
  userInput.value = "";
}


function restartGame() {
  generateAnswer();
  clearInput();
  document.querySelector('.your-guess').innerText = '?';
  document.querySelector('.message').innerText = 'Make a guess';

}
