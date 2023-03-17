var questionsArray = [
  {
    question: 'Which of the following is not a commonly used data type?', 
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 2
  },
  {
    question: 'Where is the condition in an if/then statement enclosed?',
    answers: [ "Parentheses", "Quotes", "Curly Brackets", "Square Brackets"],
    correctAnswer: 0
  },
  {
    question: 'Arrays in JavaScript can be used to store what?',
    answers: ["Numbers and Stings", "Other Arrays", "Booleans", "All of the Above"],
    correctAnswer: 3
  },
  {
    question: 'String values must be enclosed within which symbol when assigned to variables?',
    answers: ["Curly Brackets", "Quotes", "Parentheses", "Commas"],
    correctAnswer: 1
  },
  {
    question: 'What is a very useful tool for printing content to the debugger during development?',
    answers: ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
    correctAnswer: 3
  }
]

var startBttn = document.getElementById('start-bttn');
var questionCard = document.getElementById('q-card');
var currentQuestion;
var questionEL = document.getElementById('question');
var answerBttnEL = document.getElementById('answer-bttn');

startBttn.addEventListener('click', startQuiz);

function startQuiz() {
  console.log('Funkytown');
  startBttn.classList.add('hide');
  currentQuestion = 0;
  questionCard.classList.remove('hide');
  // nextQuestion();
}

// function nextQuestion() {
//   showQuestion(currentQuestion);

// }

function showQuestion(questionsArray) {
  questionEL.innertext = questionsArray.question;
  question.answers.array.forEach(element => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('bttn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerBttnEL.appendChild(button);
  });

}

function selectAnswer() {

}



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
