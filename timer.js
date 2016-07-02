// Keeps time for each player's turn

var timeLeft = 8;

var timer = function() {
  if (timeLeft > 0) {
    $('#timer').html(timeLeft);
    timeLeft--;
  }
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
  timeLeft = 8;
  $('#timer').html(timeLeft);
}

$('#start').click(startTimer);
$('#pause').click(stopTimer);
