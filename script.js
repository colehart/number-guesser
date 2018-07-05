var userInput = document.querySelector('#userGuess');
var clearButton = document.querySelector('.clear-btn');
var guessButton = document.querySelector('.guess-btn');
var resetButton = document.querySelector('.reset-btn');
var rangeMin = document.querySelector('#rangeMin');
var rangeMax = document.querySelector('#rangeMax');
var rangeMessage = document.getElementById('range-msg');
var randomNumber = 0;

rangeMin.addEventListener('keyup', checkRangeMinInput());
rangeMax.addEventListener('keyup', checkRangeMaxInput());
guessButton.addEventListener('click', checkAgainstRange()); 
clearButton.addEventListener('click', clearInput());
resetButton.addEventListener('click', restartGame());

function checkRangeMinInput() {
  rangeMin = parseInt(rangeMin.value, 10);
  if (Number.isInteger(rangeMin) && Number.isInteger(rangeMax) && (rangeMin < rangeMax)) {
    generateAnswer();
    rangeMessage.innerText = `Your range has been set from ${rangeMin} to ${rangeMax}.`;
    userInput.addEventListener('input', enableGuessButtons);
  }
}

function checkRangeMaxInput() {
  rangeMax = parseInt(rangeMax.value, 10);
  if (Number.isInteger(rangeMin) && Number.isInteger(rangeMax) && (rangeMin < rangeMax)) {
    generateAnswer();
    rangeMessage.innerText = `Your range has been set from ${rangeMin} to ${rangeMax}.`;
    userInput.addEventListener('input', enableGuessButtons());
  }
}

function generateAnswer() {
  randomNumber = Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;
}


function enableGuessButtons() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
}

function checkAgainstRange() {
  // event.preventDefault();
  var guess = parseInt(userInput.value, 10);
  if ((isNaN(guess)) || (guess < rangeMin) || (guess > rangeMax)) {
    // alert(`Please enter a number between ${rangeMin} and ${rangeMax}.`);
  } else {
    checkGuess(guess);
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
    guessButton.setAttribute('disabled', '');
  }
  resetButton.removeAttribute('disabled');
}

function clearInput() {
  rangeMin.value = "";
  rangeMax.value = "";
  userInput.value = "";
}

function restartGame() {
  generateAnswer();
  clearInput();
  document.querySelector('.your-guess').innerText = '?';
  document.querySelector('.message').innerText = 'Make a guess';
  clearButton.setAttribute('disabled', '');
  resetButton.setAttribute('disabled', '');
}
