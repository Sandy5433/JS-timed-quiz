var startButton = document.querySelector(".start-button");
var questionDiv = document.querySelector(".question");
var quizCoverPg = document.querySelector(".cover-page");
var endQuizDiv = document.querySelector(".end-quiz");
var feedbackEl = document.querySelector(".feedback");
var userScore = document.querySelector(".user-score")
var userInit = document.querySelector("#user-initial");
var submitInit = document.querySelector(".submit-init")
var scoreList = document.querySelector(".score-list")

var qTitle = document.querySelector(".question-title");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var timeRemain = document.querySelector(".timer")
var timerCount = 75;

var questionIndex = 0;

// run fn startQuiz when startButton is clicked
startButton.addEventListener("click", startQuiz);
// run fn answerClick when any choices are clicked
choice1.addEventListener("click", answerClick)
choice2.addEventListener("click", answerClick)
choice3.addEventListener("click", answerClick)
choice4.addEventListener("click", answerClick)

//The startQuiz function is called when the start button is clicked
function startQuiz() {
  questionDiv.style.display = "block";
  quizCoverPg.style.display = "none";

  displayQuestion()
  startTimer()
}

//Replacing the questions content in html with the array of questions in js
function displayQuestion () {
  qTitle.textContent = questions[questionIndex].title;
  choice1.textContent = questions[questionIndex].choices[0]
  choice2.textContent = questions[questionIndex].choices[1]
  choice3.textContent = questions[questionIndex].choices[2]
  choice4.textContent = questions[questionIndex].choices[3]
}

//When user click on a choice, compare userAnswer to correctAnswer 
function answerClick (event) {
//Retrieve answer content from the array of questions
  var correctAnswer = questions[questionIndex].answer;
//Store user's choice as variable userAnswer
  var userAnswer = event.target.textContent;

  console.log(userAnswer + " vs. " + correctAnswer)

  if(userAnswer === correctAnswer) {
    // alert("Correct!")
    feedbackEl.style.display = "flex"
    feedbackEl.textContent = "Correct!"
  } else {
    // alert("Wrong!");
    feedbackEl.style.display = "flex"
    feedbackEl.textContent = "Wrong!"

    // timerCount = timerCount - 15;
    timerCount -= 15;
  }
  questionIndex++;
  if (timerCount < 0 || questionIndex > 4) {
    endQuiz();
  }
  else {
   
  displayQuestion();
  }
}
//hide questions and display endQuiz pg when endQuiz fn is called
function endQuiz () {
  questionDiv.style.display = "none";
  endQuizDiv.style.display = "block";
  clearInterval(countDown);
  userScore.textContent = timerCount
}

//define variable time remain to decrease by 1 every second
var countDown = setInterval(function(){
  timerCount--;
  timeRemain.textContent = timerCount;
}, 1000) 

//define function for startTimer
function startTimer() {
  countDown;  
}

//retrieve score & user initial and store in local storage
submitInit.addEventListener("click", function() {

  var scoreRecord = {
    initial: userInit.value,
    score: timerCount,
  };
  localStorage.setItem("highscore", JSON.stringify(scoreRecord))
  // printHighScore();
});

//paste user inital & their score on Highscores page
// function printHighScore () {
//   var savedScore = JSON.parse(localStorage.getItem("highscore"))
//   for (var i = 0; i < savedScore.length; i++) {
//   var liTag = document.createElement("li");
//   liTag.textContent = savedScore[i].initial + ": " + savedScore.score;
//   scoreList.appendChild(liTag)
//   }
// }

//Array of questions in the quiz
var questions = [
 {
    title: 'Commonly used data types DO NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    answer: '3. alerts',
  },

  {
    title: 'The condition in an if / else statement is enclosed with ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },

  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above',
  },
  
  {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },

  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'Terminal/bash', 'for loops', 'Console log'],
    answer: 'Console log',
  }
];