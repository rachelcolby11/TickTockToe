// Keeps time for each player's turn

var timeLeft = 5;

// counting variable tells us if the countdown is currently running
var counting = false;

// Use the default blue background color if more than 3 seconds left. Set background color to yellow at 3 seconds remaining and red at one second remaining
var setColor = function() {
  if (timeLeft > 3) {
    $(document.body).removeClass()
  } else if (timeLeft > 1) {
    $(document.body).removeClass().addClass('yellow');
  } else {
    $(document.body).removeClass().addClass('red');
  }
}

var timer = function() {
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    alert('He who hesitates is lost! Sorry, you lost your turn :(');
    Board.turnCount++;
    timeLeft = 5;
  }
  $('#timer').html(timeLeft);
  setColor();
}

var countdown;

var startTimer = function() {
  // Begin countdown only if countdown is not already running
  if (!counting) {
    countdown = window.setInterval(timer, 1000);
    counting = true;
  }
}

var stopTimer = function() {
  clearInterval(countdown);
  counting = false;
}

var resetTimer = function() {
  clearInterval(countdown);
  counting = false;
  timeLeft = 5;
  $('#timer').html(timeLeft);
}

$('#start').click(startTimer);
$('#pause').click(stopTimer);
