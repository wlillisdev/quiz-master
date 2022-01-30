/**
 * Function to check Quizz Answers.
 * It will check users answers and give a point for correct answer.
 * And the end of quizz it will give the user how many quesion they got right.
 */

 function checkQuizz() {
    // Define Quizz Question Vairables.
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let questionList = [question1, question2, question3, question4, question5];
    let correct = 0;
    let total = 5;

    // Validate form,To check if all questions are answered, user cant submit until all questions answered
    let i = "question";
    for (i = 0; i < total; i++){
        if (questionList[i] == null || questionList[i] == '') {
            alert('you missed question ' + (i + 1));
            return false;
        }
    }
   
    // paramaters of if statment, checking users answers to quesions.
    // User earns one point for every correct answer.
    // TRIVA Quizz Answers

    if (question1 == "9.58 Sec") {
        correct++;
    }
    if (question2 == "India") {
        correct++;
    }
    if (question3 == "Capoeira") {
        correct++;
    }
    if (question4 == "Australia") {
        correct++;
    }
    if (question5 == "11") {
        correct++;
    }
  
    // define varabile and the array of pictuers types and comments that will appear .
    //calcuated in relation to there final score.
    let pictures = ["assets/images/excellent-3.gif", "assets/images/smart.gif", "assets/images/bad-score.gif"];
    let messages = ["Amazing! You Rock", "Good Job,Smart but room for improvement.", "Not Great,Try Again"];

    //determines 3 diffrent ranges for users score that will decide what pictuer to show .

    let range;

    if (correct < 2) {
        range = 2;
    }

    if (correct > 1 && correct < 5) {
        range = 1;
    }
    //Top Marks all correct.
    if (correct > 4) {
        range = 0;
    }
   
    //after user submits quizz this section will appear.
    document.getElementById("after_submit").style.visibility = "visible";
    //after user submits quizz user final score,a message and a pictuer will appear.
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    //after user submits Quiz Answers dispplays a pictuer
    document.getElementById("picture").src = pictures[range];
    //after user submits Quiz displays answers to quiz
    document.getElementById("answers").innerHTML = "Answers<br>Q1-1,9.58 Sec,<br> Q2-India<br>Q3-Capoeira<br>Q4-Australia<br>Q5-11";
    setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
    }, 100);
}
//Reset button will hide quizz result once pressed
function hide() {
    document.getElementById("after_submit").style.visibility = "hidden";
}