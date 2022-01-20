/**
 * Function to check Quizz Answers.
 * It will check users answers and give a point for correct answer.
 * And the end of quizz it will give the user how many quesion they got right.
 */
/*jshint esversion: 6 */ 

function check() {
    // Define Quizz Question Vairables.
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;
    var total = 5;

    // Validate form,To check if all questions are answered, user cant submit until all questions answered

    let i = "question";
    for(i = 1; i <= total; i++){


        if (eval('question' +i) == null || eval('question' +i) == '') {

            alert('You missed question '+ i);
            return false;
        }
    }
    
    

    // paramaters of if statment, checking users answers to quesions.
    // User earns one point for every correct answer.
    // TRIVA Quizz Answers


    if (question1 == "1,200 km/h") {
        correct++;
    }
    if (question2 == "St James") {
        correct++;
    }
    if (question3 == "24") {
        correct++;
    }
    if (question4 == "AB negative") {
        correct++;
    }
    if (question5 == "Hungary") {
        correct++;
    }

   
    // define varabile and the array of pictuers types and comments that will appear .
    //calcuated in relation to there final score.
    var pictures = ["assets/images/excellent-3.gif", "assets/images/smart.gif", "assets/images/bad-score.gif"];
    var messages = ["Amazing! You Rock", "Good Job,Smart but room for improvement.", "Not Great,Try Again"];
    
    //determines 3 diffrent ranges for users score .
    
    var range;
    
    if (correct < 2) {
        range = 2;
    }

    if (correct > 1 && correct < 5) {
        range = 1;
    }
    
    if (correct > 4) {
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


//Animates the text on the hero on the home page, adapted to site -credit https://codepen.io/bulldogpatch-the-sasster/pen/JjoyeGg.
const text = document.querySelector(".heading-hero, heading-hero-line");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

var facts = [

    'Tic Tac mints are named after the sound their container makes.',
    'The largest volcano in the solar system is three times taller than Mount Everest.',
    'The world record for the tallest stack of doughnuts totaled more than 3,000.',
    'The fastest gust of wind ever recorded on Earth was 253 miles per hour.',
    'The Canary Islands are named after dogs, not birds.',
    'Four babies are born every second.',
    'There are around 4 quadrillion quadrillion bacteria on Earth.',
    'There are 43 countries that still have a royal family.',
    'The bumblebee bat is the world’s smallest mammal',
    'All giant pandas in zoos around the world are on loan from China.',
    'Bats are the only mammal that can actually fly.',








]
// Create a function to generate quote from array
function generateQoute(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector("#generatedQuote")
    .textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector("#AuthorName")
    .textContent = `--${arrayOfQuotes[random].author}`;
}