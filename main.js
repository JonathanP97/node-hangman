var inquirer = require('inquirer');
var Word = require('./construct.js');

// Creates unknown word and dash-string
var unknownWord = new Word();
unknownWord.getWord();
unknownWord.toString();


console.log("\nLets play a game of hangman");
console.log("think animals\n");

// limits input to only a single character
function validateInput(name) {
	return name.length === 1;
}

function turn() {
	inquirer 
	.prompt([
	   {
	   	 message: unknownWord.string,
	   	 name: 'letter',
	   	 validate: validateInput
	   },
	]).then( function(input) {
		
		if(unknownWord.attempts !== 0) {
			//Checks letter if within word
			var pos = unknownWord.letterCheck(input.letter);

			//Replaces dashes with letter 
			for(var i = 0; i<pos.length; i++) {
			   var index = pos[i] *2;
			   unknownWord.string = unknownWord.string.substring(0, index) + input.letter + unknownWord.string.substring(index + 1);
			}
			//If letter entered is not found within hidden word, subtracts from attempts
			if(pos.length === 0 && unknownWord.attempts > 0) {
				unknownWord.attempts -= 1;
				console.log(unknownWord.attempts + " guesses remaining");
			   
			}
		} 
	}).then( function() {
		var dashes = unknownWord.string.indexOf("_");
		if(dashes !== -1 && unknownWord.attempts !== 0) {
			turn();
		} else {
			console.log(unknownWord.word);
		}
	});	
}

var dashes = unknownWord.string.indexOf("_");
if(dashes !== -1) {
	turn();
}