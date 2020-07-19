// Scoreboard & Timer
$(document).ready(function() {
    var timerSeconds = 30;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
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
                isCorrect();
            }
        $("#correct").text("Correct: $[correctAnswers]");
        $("#incorrect").text("Inorrect: $[correctAnswers] Bummer!");
        $("#noAnswer").text("Not Answered: $[noAnswer]");
            }
    });

    function isCorrect() {
        for (var i = 1; i < 8; i++) {
            var buttonValue = $("input[name=a${i}]:checked").value();
            if (buttonValue === "true") {
                console.log(true);
                correctAnswers++;
            } else if (buttonValue === "false") {
                console.log(false);
                incorrectAnswers++;
            } else {
                console.log("not answered");
                noAnswer++;
            }
        }
    }
});