// Connects the user's actions with the logic in boardLogic and checks for a win

$(document).ready(function(){
	var boardObject = window.Board;
	var Board = window.Board.board;
	var TurnCount = window.Board.turn;
	var squares = document.getElementsByClassName('square');

	$('.square').on('click', function(e){
		var coordinates = this.attributes.id.nodeValue;
		var squareObject = boardLogic.findSquare(Board, coordinates);
		var currentState = squareObject.state;
		if (squareObject){
			currentState = boardLogic.updateState(squareObject, boardObject);
			if (currentState === 'X') {
				this.classList.add('X');
			} else if (currentState === 'O'){
				this.classList.add('O');
		  } else if (currentState === 'square filled'){
				alert('Sorry, this square is taken.');
			}
			stopTimer();
			timeLeft = 8;
			startTimer();
		}

		if (boardLogic.checkHorizontalWin(squareObject, Board)){
				var playAgain = confirm('You win! Play again?');
				boardLogic.playAgain(playAgain, Board);
			} else if (boardLogic.checkVerticalWin(squareObject, Board)){
				var playAgain = confirm('You win! Play again?');
				boardLogic.playAgain(playAgain, Board);
			} else if (boardLogic.checkDiagonalWin(squareObject, Board)) {
				var playAgain = confirm('You win! Play again?');
				boardLogic.playAgain(playAgain, Board);
			} else if (boardLogic.catsGame(Board)) {
				var playAgain = confirm('Cat\'s game! Play again?');
				boardLogic.playAgain(playAgain, Board);
			}
	});

});
