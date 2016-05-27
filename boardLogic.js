
(function(){

  // boardLogic functions set up the game board so that it's ready for game play
  window.boardLogic = {};

	// creates each piece on the board; each piece is an object with coordinates (string value of column and row) and a state: null, 'X' or 'O'. default = null
  //When the first player clicks on an empty square, the squares state should be changed to 'X', when the second player clicks on an empty square, the state should be changed to 'O'.

	boardLogic.createPiece = function(coordinates){
		var piece = {
			name: 'piece',
			coordinates: coordinates,
			state: null,
		};

		return piece;
	};


  // Board holds the turnCount (Board.turnCount) which tells the program whether its player 1 or player 2's turn.
	// Board.board is the matrix itself. calling Board.resetBoard() creates a new 3 by 3 matrix where the states of each object are set to null.

	boardLogic.createBoard = function(){
		var Board = {
			turnCount: 2,
			increment: function(){
				this.turnCount++
			},
			resetTurnCount: function(){
				this.turnCount = 2;
			},
			resetBoard: function(){
				this.board = boardLogic.create(3);
			}
		};

		Board.resetBoard();

		return Board;
	};


	boardLogic.create = function(num){
		var board = _.range(num);
		forEach(board, function(space, index, board){
			row = map(_.range(num), function(val){
			 return boardLogic.createPiece(index.toString() + val.toString());
			});
			board[index] = row;
		});

		return board;
	};


	window.Board = boardLogic.createBoard();


})();
