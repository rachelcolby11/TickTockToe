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
		
	});
});
