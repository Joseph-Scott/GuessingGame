//create secretNumber
var secretNumber = 4

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

//check if guess is higher
else if (guess > secretNumber) {
	alert("Too high, guess again!");
}

//Otherwise, check if lower

else {
	alert("Too low, guess again!");
}