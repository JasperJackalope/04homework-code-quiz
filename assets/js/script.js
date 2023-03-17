var startBttn = document.getElementById('start-bttn');
var questionCard = document.getElementById('q-card');

startBttn.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Funkytown');
  startBttn.classList.add('hide');
  questionCard.classList.remove('hide');
  nextQuestion();
}

function nextQuestion() {

}

function selectAnswer() {

}

var questions = [
  {
    question: 'Which of the following is not a commonly used data type?', 
    answers: [
      {text: 'Strings', correct: false},
      {text: 'Booleans', correct: false},
      {text: 'Alerts', correct: true},
      {text: 'Numbers', correct: false}
    ]
  }
  {
    question: 'Where is the condition in an if/then statement enclosed?',
    answers: [
      {text: 'Parentheses', correct: true},
      {text: 'Quotes', correct: false},
      {text: 'Curly Brackets', correct: false},
      {text: 'Square Brackets', correct: false}
    ]
  }
  {
    question: 'Arrays in JavaScript can be used to store what?',
    answers: [
      {text: 'Numbers and Strings', correct: false},
      {text: 'Other Arrays', correct: false},
      {text: 'Booleans', correct: false},
      {text: 'All of the Above', correct: True}
    ]
  }
  {
    question: 'String values must be enclosed within which symbol when assigned to variables?',
    answers: [
      {text: 'Curly Brackets', correct: false},
      {text: 'Quotes', correct: true},
      {text: 'Parentheses', correct: false},
      {text: 'Commas', correct: false}
    ]
  }
  {
    question: 'What is a very useful tool for printing content to the debugger during development?',
    answers: [
      {text: 'JavaScript', correct: false},
      {text: 'Terminal/Bash', correct: false},
      {text: 'For Loops', correct: false},
      {text: 'Console Log', correct: true}
    ]
  }
]

// console.log("I'm here...")

// var startBttn = document.getElementById("start-button");
// var timerEL = document.getElementById("timer");
// var secondsLeft = 60;

// startBttn.addEventlistener("click", setTime());

// function setTime() {
//   console.log("If I could turn back time");
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timerEL.textContent = secondsLeft;

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// };
