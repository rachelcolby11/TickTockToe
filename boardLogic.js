
(function(){

  // boardLogic functions set up the game board so that it's ready for game play
  window.boardLogic = {};

	// createPiece creates each piece on the board; each piece is an object with coordinates (string value of column and row) and a state: null, 'X' or 'O'. default = null
    // TO-DO: When the first player clicks on an empty square, the square's state should be changed to 'X', when the second player clicks on an empty square, the state should be changed to 'O'.
	boardLogic.createPiece = function(coordinates){
		var piece = {
			name: 'piece',
			coordinates: coordinates,
			state: null,
		};

		return piece;
	};

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

    // Calling Board.resetBoard() creates a new 3 by 3 matrix where the states of each object are set to null.
		Board.resetBoard();

    // Board holds the turnCount (Board.turnCount) which tells the program whether it's player 1 or player 2's turn.
    // Board.board is the matrix itself.
		return Board;
	};

  // creates matrix with dimensions num * num; calls createPiece to assign coordinates to each piece
	boardLogic.create = function(num){
		var board = _.range(num);
		board.forEach(function(space, index, board){
			row = (_.range(num)).map(function(val){
			 return boardLogic.createPiece(index.toString() + val.toString());
			});
			board[index] = row;
		});

		return board;
	};


	window.Board = boardLogic.createBoard();

  // findSquare takes a string of coordinates and uses it to locate the square on the board that corresponds to the coordinates in the string. Once located, findSquare returns the selected square object.
  boardLogic.findSquare = function(board, coordinates){
    var result;
    _.each(board, function(row){
      if (result === undefined) {
        result = _.find(row, function(square){
          return square.coordinates === coordinates;
        });
      }
    });
    if (result === undefined) {
      result = "square not found";
    }

    return result;
  };

})();
