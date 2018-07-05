var userInput = document.querySelector('#userGuess');
var clearButton = document.querySelector('.clear-btn');
var guessButton = document.querySelector('.guess-btn');
var resetButton = document.querySelector('.reset-btn');
var rangeMin = document.querySelector('#rangeMin');
var rangeMax = document.querySelector('#rangeMax');
var setButton = document.querySelector('#set-btn');
var randomNumber = 0;

rangeMin.addEventListener('input', checkRangeMinInput);
rangeMax.addEventListener('input', checkRangeMaxInput);
setButton.addEventListener('click', checkRangeValid);
guessButton.addEventListener('click', checkAgainstRange); 
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', restartGame);

function checkRangeMinInput() {
  rangeMin = parseInt(rangeMin.value, 10);
  if (Number.isInteger(rangeMin) && Number.isInteger(rangeMax)) {
    enableSetButton();
  }
}

function checkRangeMaxInput() {
  rangeMax = parseInt(rangeMax.value, 10);
  if (Number.isInteger(rangeMin) && Number.isInteger(rangeMax)) {
    enableSetButton();
  }
}

function enableSetButton() {
  if (Number.isInteger(rangeMin) && Number.isInteger(rangeMax)) {
    setButton.removeAttribute('disabled');
  }
}

function checkRangeValid(event) {
  event.preventDefault();
  if ((isNaN(rangeMin)) || (isNaN(rangeMax)) || (rangeMin >= rangeMax)) {
    alert(`Please enter a lower number in the LEFT field and higher number in the RIGHT field.`);
  } else {
    generateAnswer();
    alert(`Range has been set from ${rangeMin} to ${rangeMax}.`);
    userInput.addEventListener('input', enableGuessButtons);
  }
}

function generateAnswer() {
  randomNumber = Math.floor(Math.random() * (rangeMax - rangeMin)) + 1;
}


function enableGuessButtons() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
}

function checkAgainstRange(event) {
  event.preventDefault();
  var guess = parseInt(userInput.value, 10);
  if ((isNaN(guess)) || (guess < rangeMin) || (guess > rangeMax)) {
    alert(`Please enter a number between ${rangeMin} and ${rangeMax}.`);
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
