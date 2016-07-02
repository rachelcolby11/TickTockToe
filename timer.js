// Keeps time for each player's turn

var timeLeft = 8;

var timer = function() {
  if (timeLeft > 0) {
    $('#timer').html(timeLeft);
    timeLeft--;
  }
}

function startTimer() {
  var countdown = window.setInterval(timer, 1000);
}

$('#start').click(startTimer);
