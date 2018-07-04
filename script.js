var userInput = document.querySelector('#userGuess');
var clearButton = document.querySelector('.clear-btn');
var guessButton = document.querySelector('.guess-btn');
var resetButton = document.querySelector('.reset-btn');
var randomNumber = 0;
var rangeMin = 1;
var rangeMax = 100;

window.addEventListener('load', generateAnswer);
userInput.addEventListener('keypress', enableButtons);
guessButton.addEventListener('click', checkNaN); 
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', restartGame);

function generateAnswer() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function enableButtons() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
}

function checkNaN(event) {
  event.preventDefault();
  if (isNaN(parseInt(userInput.value, 10))) {
    alert(`Please enter a number between ${rangeMin} and ${rangeMax}.`);
  } else {
    checkRange(parseInt(userInput.value, 10));
  }
}

function checkRange(userGuess) {
  if (userGuess < rangeMin) {
    alert(`Please enter a number between ${rangeMin} and ${rangeMax}.`);
  } else if (userGuess > rangeMax) {
    alert(`Please enter a number between ${rangeMin} and ${rangeMax}.`);
  } else {
    checkGuess(userGuess);
  }
}

function checkGuess(userGuess) {
  document.querySelector('.your-guess').innerText = userGuess;
  if (userGuess < randomNumber) {
    document.querySelector('.message').innerText = 'That is too low';
  } else if (userGuess > randomNumber) {
    document.querySelector('.message').innerText = 'That is too high';
  } else {
    document.querySelector('.message').innerText = 'BOOM!';
  }
  resetButton.removeAttribute('disabled');
}

function clearInput() {
  userInput.value = "";
}

function restartGame() {
  generateAnswer();
  clearInput();
  document.querySelector('.your-guess').innerText = '?';
  document.querySelector('.message').innerText = 'Make a guess';
  resetButton.setAttribute('disabled', '');
  guessButton.setAttribute('disabled', '');
  clearButton.setAttribute('disabled', '');
}
