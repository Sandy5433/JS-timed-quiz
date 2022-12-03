var startButton = document.querySelector(".start-button");
var questionDiv = document.querySelector(".question");
var startDiv = document.querySelector(".start");
var endQuizDiv = document.querySelector(".end-quiz");
var feedbackEl = document.querySelector(".feedback");

var qTitle = document.querySelector(".question-title");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var timeRemain = document.querySelector(".timer")
var contestant = document.querySelector("#user-initial").value
var timerCount = 75;

var questionIndex = 0;

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
// Attach event listener to choices to call anserClick function on click
choice1.addEventListener("click", answerClick)
choice2.addEventListener("click", answerClick)
choice3.addEventListener("click", answerClick)
choice4.addEventListener("click", answerClick)

//The startQuiz function is called when the start button is clicked
function startQuiz() {
  questionDiv.style.display = "block";
  startDiv.style.display = "none";

  displayQuestion()
  startTimer()
}

function displayQuestion () {
  qTitle.textContent = questions[questionIndex].title;
  choice1.textContent = questions[questionIndex].choices[0]
  choice2.textContent = questions[questionIndex].choices[1]
  choice3.textContent = questions[questionIndex].choices[2]
  choice4.textContent = questions[questionIndex].choices[3]
}

//When user click on a choice, compare userAnswer to correctAnswer 
function answerClick (event) {
  var correctAnswer = questions[questionIndex].answer;
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

  if (timerCount =< 0) {
    endQuiz();
  }
  else {
  // questionIndex = currentIndex + 1;
  questionIndex++;
  displayQuestion();
  }
}

function endQuiz () {




}


function startTimer() {
  setInterval(function(){
    timerCount--;
    timeRemain.textContent = timerCount;
  }, 1000)
}
 

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