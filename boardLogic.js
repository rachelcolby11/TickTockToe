
(function(){

  // boardLogic functions set up the game board so that it's ready for game play
  window.boardLogic = {};

	// createPiece creates each piece on the board; each piece is an object with coordinates (string value of column and row) and a state: null, 'X' or 'O'. default = null
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

  // FUNCTIONS TO WRITE:

  boardLogic.updateState = function(currentSquare, boardObject){
    // Check to see if the square has been filled
    if (currentSquare.state === null) {
      // If square is available, change its state to X or O depending on which player is taking their turn
      if (boardObject.turnCount % 2 === 0) {
        currentSquare.state = 'X';
      } else {
        currentSquare.state = 'O';
      }
      boardObject.turnCount++;

    } else {
      // If the square has already been used, update its state to 'square filled'.
      currentSquare.state = 'square filled';
    }
    return currentSquare.state;
	};

	boardLogic.checkHorizontalWin = function(currentSquare, board){
     // if every square in the currentSquare's row has the same state, player has won.
      var rowIndex  = currentSquare.coordinates[0];
      if (_.every(board[rowIndex], function(element){return (element.state === 'X');})){
        return true;
      } else if (_.every(board[rowIndex], function(element){return (element.state === 'O');})){
        return true;
      } else {
        return false;
      }
	};

	boardLogic.checkVerticalWin = function(currentSquare, board){
    // if every square in the currentSquare's column has the same state, that player has won.
      // find the column of currentSquare
      var currentColumn;
      if (currentSquare.coordinates[1] === '0') {
         currentColumn = [board[0][0], board[1][0], board[2][0]];
       } else if (currentSquare.coordinates[1] === '1') {
         currentColumn = [board[0][1], board[1][1], board[2][1]];
       } else if (currentSquare.coordinates[1] === '2') {
         currentColumn = [board[0][2], board[1][2], board[2][2]];
       }
       // check to see if the squares in the column have the same state
       if (_.every(currentColumn, function(element){return (element.state === 'X');})){
         return true;
       } else if (_.every(currentColumn, function(element){return (element.state === 'O');})){
         return true;
       } else {
         return false;
       }
	};

	boardLogic.checkDiagonalWin = function(currentSquare, board){
    // If 3 diagonal squares have the same state, the player has won.
    var diagonal1 = [board[0][0], board[1][1], board[2][2]];
    var diagonal2 = [board[2][0], board[1][1], board[0][2]];
    if (_.every(diagonal1, function(element){return (element.state === 'X');})){
      return true;
    } else if (_.every(diagonal1, function(element){return (element.state === 'O');})){
      return true;
    } else if (_.every(diagonal2, function(element){return (element.state === 'X');})){
        return true;
    } else if (_.every(diagonal2, function(element){return (element.state === 'O');})){
        return true;
    } else {
      return false;
    }

	};

  boardLogic.catsGame = function(board){
    // look through the board and return true if all of the squares have been filled but no one has won.
  };

  boardLogic.playAgain = function(prompt, board){
     // if the player's prompt returns true, clear the state from each square in the board.
  };

})();
