var startButton = document.querySelector(".start-button")
var timeRemain = document.querySelector(".time")
var contestant = document.querySelector("#user-initial").value


// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

//The startQuiz function is called when the start button is clicked
function startQuiz() {

}

//Array of questions in the quiz
var questions = [
 {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },

  {
    title: 'The condition in an if / else statement is enclosed with ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'alerts',
  },

  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'alerts',
  },
  
  {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'alerts',
  },

  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'Terminal/bash', 'for loops', 'Console log'],
    answer: 'alerts',
  }
];