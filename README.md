##TickTockToe

TickTockToe is a tic-tac-toe game with a time limit! Players must make a move quickly, or after five seconds they lose their turn! I built TickTockToe using native JavaScript along with [jQuery](https://jquery.com/) and the [Underscore library](http://underscorejs.org/).

###Game Play

The game is kicked off when the first player makes their move, triggering a countdown timer to ensure that each player's turn lasts less than five seconds. A countdown displays the seconds left in the current turn. After five seconds, an alert will pop up to let the player know her or she has lost their turn. If the game gets interrupted, players can use the Pause and Start buttons by the countdown display to pause the timer and then restart it once they are ready to resume the game.

TickTockToe will automatically detect and announce when a player has won; if all possible moves have been made and no player has won, TickTockToe will announce a Cat's Game. At the end of each game, players will have the opportunity to reset the board and play again.
