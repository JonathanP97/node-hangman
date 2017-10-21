var inquirer = require('inquirer');
var Word = require('./construct.js');

var unknownWord = new Word();
unknownWord.getWord();
unknownWord.toString();

// console.log(unknownWord.word);
// console.log(s);

console.log("Lets play a game of hangman");
console.log("think animals");


function turn() {
	inquirer 
	.prompt([
	   {
	   	 message: unknownWord.string,
	   	 name: 'letter'
	   },
	]).then( function(input) {

		if(unknownWord.attempts !== 0) {
			var pos = unknownWord.letterCheck(input.letter);

			// console.log(pos);
			// console.log(unknownWord.string);
			console.log();
			for(var i = 0; i<pos.length; i++) {
			   var index = pos[i] *2;
			   unknownWord.string = unknownWord.string.substring(0, index) + input.letter + unknownWord.string.substring(index + 1);
			}
			
			if(pos.length === 0) {
			   console.log(unknownWord.attempts + " guesses remaining");
			   unknownWord.attempts -= 1;
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