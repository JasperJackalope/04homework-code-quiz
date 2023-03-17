var startPage = document.querySelector('#startpage');
var quizCard = document.querySelector ('#quizcard');
var questionCard = document.querySelector ("#questioncard");
var answerCard = document.querySelector ("#answercard");
var endPage = document.querySelector ("#end");
var timerElement = document.querySelector ("#secondsLeft");
var startBttn = document.querySelector("#startQuiz");
var highScoresBttn = document.querySelector("#highscores");
var scoreCard = document.querySelector("#scorecard")
var timerScoreBar =  document.querySelector("#tm-sc-bar")
var finalScore = document.querySelector("#final-score");
var form = document.querySelector("#enterScore")
var initials = document.querySelector("#initials")
var result ;
var footer = document.querySelector("footer")
var answerBttns = document.querySelector(".answers")
var score;
var storedScores =[];
var timer;
var timerCount;
var currentQuestionIndex = 0;

const questionsArray = [
    {
      question: 'Which of the following is NOT a commonly used data type?', 
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
    },
    {
        question: 'Do you know the way to San Jose?',
        answers: ["Yes", "No", "Whoa-whoa-whoa-whoa-whooooaaaaa", "Huh?"],
        correctAnswer: 2
    }

  ];


function startGame () {
    currentQuestionIndex = 0;
    console.log("Funkytown")
    startPage.setAttribute ("style", "display:none;");
    highScoresBttn.setAttribute("style", "visibility:hidden;");
    timerScoreBar.setAttribute("style", "display:flex;")
    timerCount = (questionsArray.length * 12) + 1;

    startTimer()
    createQuiz()
}



function startTimer () {
    console.log('Studio 54')
    timerInterval = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            gameOver();
        }
    }, 1000);
}


function createQuiz () {
    console.log('I love the night life.')
    if (currentQuestionIndex < questionsArray.length) {
        quizCard.setAttribute("style", "display:contents;");
        questionCard.setAttribute("style", "display:contents;");
        answerCard.setAttribute("style", "display:flex;");
        var currentQuestion = questionsArray[currentQuestionIndex];
        questionCard.innerHTML = currentQuestion.question;
        var numberOfAnswers = currentQuestion.answers.length
        answerCard.textContent = "";
        for (var i = 0; i < numberOfAnswers; i++) {
            var choice = currentQuestion.answers[i];
            var answerChoices = document.createElement("button");
            answerChoices.textContent = choice;
            answerChoices.setAttribute("class", "answers");
            answerChoices.setAttribute("data-index", i);
            answerChoices.addEventListener("click", answerResult);
            answerCard.appendChild(answerChoices);
        }
    } else {
        finishGame();
    }
}

function resultPrompt () {
    console.log("Don't leave me this way");
    if (result) {
        footer.setAttribute("display", "contents");
        footer.innerHTML = "Right-o!";
        setTimeout(function() {
            footer.innerHTML = "";
        },4000);
    } else  {
        footer.setAttribute("display", "contents");
        footer.innerHTML = "Nope!";
        setTimeout(function() {
            footer.innerHTML = "";
        },4000);
    }

}

function answerResult (event) {
    console.log('Rock the boat.')
    var chosenAnswer = event.target.dataset.index;
    if (chosenAnswer == questionsArray[currentQuestionIndex].correctAnswer) {
        result = true;
        resultPrompt();
    } else {
        result = false
        timerCount -= 10;
        console.log(result)
        resultPrompt();
    }
    currentQuestionIndex++;
    createQuiz()

}

function finishGame () {
    clearInterval(timerInterval);
    score = timerCount;
    timerElement.textContent = score;
    quizCard.innerHTML = "That which was will no longer be.";
    endPage.setAttribute("style", "display:contents;");
    finalScore.textContent = score;
    form.addEventListener("submit", function(event) {
        quizCard.innerHTML = ""
        event.preventDefault();
        enterScore();
        scoresTable()
    })
}

function enterScore () {
    var inputInitials = initials.value.toUpperCase();
    var playerScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var highScores = {
        initials: inputInitials,
        score: score
    };
    playerScores.push(highScores);
    localStorage.setItem("highScores", JSON.stringify(playerScores));
    scoresTable();
}

function scoresTable () {
    startPage.setAttribute ("style", "display:none;");
    quizCard.setAttribute ("style", "display:none;");
    endPage.setAttribute("style", "display:none;");
    scoreCard.setAttribute ("style", "display:flex;");
    timerScoreBar.setAttribute("style", "display:none;");
    var playerHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    scoreCard.innerHTML="";
    for (i=0; i<playerHighScores.length; i++) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = playerHighScores[i].initials + "  -  " + playerHighScores[i].score
        scoreCard.appendChild(listItemEl)
    }
}

function gameOver () {
    clearInterval(timerInterval)
    answerCard.setAttribute("style", "display:none;")
    questionCard.innerHTML = "Time's Up!"
    highScoresBttn.setAttribute("style", "visibility:visible;")
}

startBttn.addEventListener("click", startGame)

highScoresBttn.addEventListener("click", scoresTable)