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
