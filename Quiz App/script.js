class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScores() {
  let quizEndHTML = `<h1>Quiz Completed</h1>
  <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
  <div class="quiz-repeat">
      <a href="index.html">Take the Quiz again</a>
  </div>`;

  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [
  new Question(
    "What is the difference between let, const, and var in JavaScript?",
    [
      "let and const are block-scoped, while var is function-scoped.",
      "const can be reassigned, while let cannot.",
      "let is global-scoped, and var is block-scoped.",
      "There is no difference between them.",
    ],
    "let and const are block-scoped, while var is function-scoped."
  ),
  new Question(
    "Which of the following is true about JavaScript functions?",
    [
      "Functions cannot return other functions.",
      "JavaScript does not support anonymous functions.",
      "A function in JavaScript can be assigned to a variable.",
      "Functions cannot be passed as arguments to other functions.",
    ],
    "A function in JavaScript can be assigned to a variable."
  )
];

let quiz = new Quiz(questions);
displayQuestion();

// Add a countdown
let time = 10; 
let counting = document.getElementById("count-down");

function startCountDown() {
  let quizTimer = time;

  let interval = setInterval(function () {
    if (quizTimer <= 0) {
      clearInterval(interval);
      showScores();
    } else {
      quizTimer--;
      let sec = quizTimer % 60;
      counting.innerHTML = `TIME: ${sec}`;
    }
  }, 1000);
}

startCountDown();
