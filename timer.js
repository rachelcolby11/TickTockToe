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

function startTimer() {
  countdown = window.setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  timeLeft = 5;
  $('#timer').html(timeLeft);
}

$('#start').click(startTimer);
$('#pause').click(stopTimer);
