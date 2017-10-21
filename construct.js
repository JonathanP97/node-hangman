var wordBank = ["wolf", "rabbit", "shark", "monkey", "gorilla", "whale", "zebra", 
				"giraffe", "snake", "lion", "leopard", "jellyfish", "sloth", "turtle"];

function Word() {
	this.word = null,
	this.string = "",
	this.attempts = 6,
	this.getWord = function() {
		var num = Math.floor( Math.random() * wordBank.length );
		this.word = wordBank[num];
	},
	this.toString = function () {	  
		for(var i=0; i<this.word.length; i++) {
			this.string += "_ "; 
	   }
	},
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