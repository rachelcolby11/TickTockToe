// Keeps time for each player's turn

var timeLeft = 5;

var timer = function() {
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    alert('He who hesitates is lost! Sorry, you lost your turn :(');
    Board.turnCount++;
    timeLeft = 5;
  }
  $('#timer').html(timeLeft);
}

var countdown;

var startTimer = function() {
  countdown = window.setInterval(timer, 1000);
}

var stopTimer = function() {
  clearInterval(countdown);
}

var resetTimer = function() {
  clearInterval(countdown);
  timeLeft = 5;
  $('#timer').html(timeLeft);
}

$('#start').click(startTimer);
$('#pause').click(stopTimer);
