


var game = {
	turns: 10,
	wins: 0,
	losses: 0,
	won: true,
	words: ["pistol", "spurs", "duel", "whiskey", "horse", "west", "gold", "saloon" ],


	

	updateTurns: function(){
		
		if (this.turns > 1){
		this.turns = this.turns - 1;
		document.getElementById("turnsRemaining").innerHTML = this.turns;
		}
		else{
			this.turns = 10;
			document.getElementById("turnsRemaining").innerHTML = this.turns;
			
		}

	},

	pickword: function(){ 
	var randWord = this.words[Math.floor(Math.random()*this.words.length)];
	
	for (var i = 0; i < randWord.length; i++) {
		
		randWord.charAt(i).replace("_" * randWord.length);
		document.getElementById("wordhidden").innerHTML = randWord;
	}
},

	updateWins: function(){
		this.wins = this.wins + 1;
		document.getElementById("turnsRemaining").innerHTML = this.turns;
	},

	updateLosses: function(){
		this.losses = this.losses + 1;
	}
};




document.onload = game.pickword()




document.onkeyup = function(event){
	keyPress = event.key;

	if (keyPress) {
		game.updateTurns(); 
	}
	

}	