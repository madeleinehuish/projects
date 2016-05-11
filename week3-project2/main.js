
// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum (x,y) {
	if (x < y){
		return x;
	} else if ( y < x) {
		return y;
	} else {
		return ('They are equal')
	}

}

minimum (3, 4)

// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3 (x,y,z) {
      return Math.min(x, y, z);
}

minimum3 (3, 4, 4)

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum (numArray) {
	var total = 0;
	for (i = 0; i < numArray.length ; i ++) {
		total = total + numArray[i];

	}
	return total;

}

var numberArray = [11, 23, 3, 5, 26, 71, 35];
sum (numberArray);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply (numArray) {
	var total = 1;
	for (i = 0; i < numArray.length ; i ++) {
		total = total * numArray[i];

	}
	return total;

}

var numberArray = [11, 23, 3, 5, 26, 71, 35];
multiply (numberArray);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
function filterSixPlus (wordArray) {
	for (i = 0; i < wordArray.length; i++){
		console.log(i);
		console.log(wordArray);
		if (wordArray[i].length < 6) {
			wordArray.splice(i,1);
			i = i -1;
			console.log(wordArray);
		}
	}
	return wordArray;

}

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
filterSixPlus (words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
function convertToFahrenheit (tempC) {
	var tempF;
	tempF = tempC*1.8 + 32;
	return (tempC + " degrees Celsius is equal to " + tempF + " degrees Fahrenheit.");

}

var userInput = prompt ('Give a temperature in Celsius');
parseFloat (userInput);
convertToFahrenheit(userInput);

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
askUser();


function askUser() {

var userTemperature = prompt ('Give a temperature in either Fahrenheit or Celsius');
var userCelsiusOrFahrenheit = prompt ('type f if you want to convert Fahrenheit to Celsius or type c if you want to convert Celsius to Fahrenheit');
parseFloat (userTemperature);
if (userCelsiusOrFahrenheit === 'c'){
	return convertToFahrenheit(userTemperature);
} else if (userCelsiusOrFahrenheit === 'f'){
	return convertToCelsius(userTemperature);
}
	else {
		alert ("You didn't enter f or c!!!");
	}
}
function convertToFahrenheit (tempC) {
	var tempF;
	tempF = tempC*1.8 + 32;
	return (tempC + " degrees Celsius is equal to " + tempF + " degrees Fahrenheit.");

}
function convertToCelsius (tempF) {
	var tempC;
	tempC = (tempF - 32)/1.8;
	return (tempF + " degrees Fahrenheit is equal to " + tempC + " degrees Celsius.");
}


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
var counter = 0;

function countBs (convertThisString) {
	for (i =0; i < convertThisString.length; i ++) {
		if (convertThisString[i] === 'B') {
			counter = counter + 1;
		}


	}
	return counter;

}
var stringExample = "bbbbbBBBBBBBByoyouooyoBBBB";
countBs(stringExample);

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
var counter = 0;

function countBs (convertThisString, charToFind) {

	for (i =0; i < convertThisString.length; i ++) {
		if (convertThisString[i] === charToFind) {
			counter = counter + 1;
		}


	}
	return counter;

}
var stringExample = prompt ("Enter a string");
var charExample = prompt ("What character do you want to count?")
countBs(stringExample, charExample);

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.
var stringToFix = "oooorrroooo".replace(/o/g,'0');
console.log(stringToFix);


// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
function ninetyNineBottlesOfBeer(){
	for (i = 99; i > 0 ; i = i - 1){
		console.log(i + " bottles of beer on the wall. " + i + " bottles of beer... Take one down pass it around. " + (i-1) + " bottles of beer on the wall... :/");

	}

}

ninetyNineBottlesOfBeer();


// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
//Guessing Game

function guessANumber(giveMeANumber) {
	var topNumber = parseInt(giveMeANumber);
	if (isNaN(topNumber)) {
		topNumber = 10;
	}
	var computerNumber = Math.ceil(Math.random()*topNumber);
	var guess;
	checkGuess(topNumber);
    function checkGuess (giveMeANumber) {
		var input = prompt ("Guess a number between 1 and " + giveMeANumber + " or cancel to get out.");
		if (input === null){
			return;
		}
		guess = parseInt(input);
		if (guess === computerNumber) {
			alert ("You got it!");
			
		} else if (guess > computerNumber){
			alert('You are too high. Guess lower next time.');
			checkGuess(giveMeANumber);	
		} else {
			alert('You are too low. Guess higher next time.');
			checkGuess(giveMeANumber);
		}
   }
	
}

var tryThis = prompt('Give me a number');
guessANumber(tryThis);


// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
