// Scoreboard & Timer
$(document).ready(function() {
    var timerSeconds = 30;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var noAnswer = 0;
// Start button
    $("#start-button").click(function() {
        $("#start-screen").hide();
        $("#game-screen").show();

        var interval = setInterval(timer, 240);

        function timer() {
            timerSeconds--;
            $("#timer").text("Time remaining: $[timerSeconds]");

            if(timerSeconds === 0) {
                clearInterval(interval);
                $("#game-screen").hide();
                $("#game-over").show();
                isRight();
            }
        }
    })

})