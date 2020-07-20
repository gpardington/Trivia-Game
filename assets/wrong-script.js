// Scoreboard & Timer
$(document).ready(function() {
    var timerValue = 10;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
// Start button
    $("#start-button").click(function() {
        $("#start-screen").hide();
        $("#game-screen").show();

        var interval = setInterval(timer, 1000);

        function timer() {
            timerValue--;
            $("#timer").text(`Time remaining: ${timerValue}`);

            if(timerValue === 0) {
                clearInterval(interval);
                $("#game-screen").hide();
                $("#game-over").show();
                isRight();
            }
        $("#correct").text(`Correct: ${correctAnswers}`);
        $("#incorrect").text(`Incorrect: ${incorrectAnswers} Bummer!`);
        $("#noAnswer").text(`Not Answered: ${unanswered}`);
            }
    });

    function isRight() {
        for (var i = 1; i < 8; i++) {
            var buttonValue = $(`input[name=a${i}]:checked`).val();
            if (buttonValue === "true") {
                console.log(true);
                correctAnswers++;
            } else if (buttonValue === "false") {
                console.log(false);
                incorrectAnswers++;
            } else {
                console.log("unanswered");
                unanswered++;
            }
        }
    }
});