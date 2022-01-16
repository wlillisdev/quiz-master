/**
 * Function to check Quizz Answers.
 * It will check users answers and give a point for correct answer.
 * And the end of quizz it will give the user how many quesion they got right.
 */


function check() {
    // Define Quizz Vairables.
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question3.value;
    var question5 = document.quiz.question3.value;
    var correct = 0;

    // paramaters of if statment, checking users answers to quesions.
    // User earns one point for every correct answer.
    // TRIVA Quizz Answers
    if (question1 == "Providence") {
        correct++;
    }
    if (question2 == "Hartford") {
        correct++;
    }
    if (question3 == "Albany") {
        correct++;
    }


    // Sports Quizz Answers






    // array of pictuers and comments that will appear .
    //calcuated in relation to there final score.
    var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;
    //determines 3 diffrent ranges for users score .
    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }
    //after user submits quizz this section will appear.
    document.getElementById("after_submit").style.visibility = "visible";
    //after user submits quizz user final score,a message and a pictuer will appear.
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}