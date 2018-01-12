//Word bank for hangman game
var wordBank = ["wolf", "rabbit", "shark", "monkey", "gorilla", "whale", "zebra", 
				"giraffe", "snake", "lion", "leopard", "jellyfish", "sloth", "turtle"];

// Constructor for hidden word
function Word() {
	//word user is to uncover
	this.word = null,
	//string which contains dashes
	this.string = "",
	this.attempts = 8,
	//determines random word using array
	this.getWord = function() {
		var num = Math.floor( Math.random() * wordBank.length );
		this.word = wordBank[num];
	},
	//creates dash-string based off hidden word
	this.toString = function () {	  
		for(var i=0; i<this.word.length; i++) {
			this.string += "_ "; 
	   }
	},
	//Finds where letter is located within hidden word
	//returns array of letter positions
	this.letterCheck = function(lett) {
		var positions = [];

		for(var i=0; i<this.word.length; i++) {
			var p = this.word.indexOf(lett, i);

			if(p !== -1) {
				positions.push(p);
				i = p;
			}
			// positions.push(p);
		}
		return positions;
	}
}

module.exports = Word;