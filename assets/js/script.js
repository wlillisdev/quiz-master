/**
 * Function to check Quizz Answers.
 * It will check users answers and give a point for correct answer.
 * And the end of quizz it will give the user how many quesion they got right.
 */

function check() {
    // Define Quizz Question Vairables.
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
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
    if (question4 == "Hartford") {
        correct++;
    }
    if (question5 == "Albany") {
        correct++;
    }

   
    // define varabile and the array of pictuers types and comments that will appear .
    //calcuated in relation to there final score.
    var pictures = ["assets/images/excellent-3.gif", "assets/images/smart.gif", "assets/images/bad-score.gif"];
    var messages = ["Amazing! You Rock", "Good Job,Smart but room for improvement.", "Not Great,Try Again"];
    
    //determines 3 diffrent ranges for users score .
    
    var range;
    
    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }
    
    if (correct > 2) {
        range = 0;
    }
     //Top Marks all correct.

    //after user submits quizz this section will appear.
    document.getElementById("after_submit").style.visibility = "visible";
    //after user submits quizz user final score,a message and a pictuer will appear.
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
       
}