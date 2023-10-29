const questions = [
  {
    question: "In India, Ancient Iron Age is attached with ",
    answers: [
      { text: "Gray pottery", correct: true },
      { text: "Black and Red Pottery", correct: false },
      { text: "Ocher Coloured Pottery", correct: false },
      { text: "Northern Black Polish Pottery", correct: false },
    ],
  },
  {
    question: "Ashoka sent missionaries to",
    answers: [
      { text: "China and Kashmir", correct: false },
      { text: "Tibet and Ceylon", correct: true },
      { text: "Tibet and China", correct: false },
      { text: "Kashmir and Ceylon", correct: false },
    ],
  },
  {
    question: "Which among the following is the oldest dynasty",
    answers: [
      { text: "Maurya", correct: true },
      { text: "Gupta", correct: false },
      { text: "Kushan", correct: false },
      { text: "Kanva", correct: false },
    ],
  },
  {
    question:
      "Which amont the following book based on the exploits of Yasovarman of Kanauj?",
    answers: [
      { text: "Rajatarangini", correct: false },
      { text: "Gaudavaho", correct: true },
      { text: "Malavikagnimitram", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Who was the founder of the Kanva Dynasty",
    answers: [
      { text: "Suserman", correct: false },
      { text: "Vishusarma", correct: false },
      { text: "Vasudeva", correct: true },
      { text: "Vasumitra", correct: false },
    ],
  },
  {
    question: "Who was the founder of Vikramshila Vihar",
    answers: [
      { text: "Dharmapala", correct: true },
      { text: "Gopala", correct: false },
      { text: "Nagpala", correct: false },
      { text: "Mahipala", correct: false },
    ],
  },
  {
    question:
      "Bagh painting of Gupta Empire was found in which of the following Indian states?",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Madhya Pradesh", correct: true },
      { text: "Chattisgarh", correct: false },
      { text: "Maharashtra", correct: false },
    ],
  },
  {
    question: "Which emperor wrote the play 'Nagananda' in Sanskrit language?",
    answers: [
      { text: "Prabhakara vardhana", correct: false },
      { text: "Harshavardhana", correct: true },
      { text: "Chandragupta ||", correct: false },
      { text: "Bindusara", correct: false },
    ],
  },
  {
    question: "Which of the following books is based on Astrology?",
    answers: [
      { text: "Romak Siddhanta", correct: false },
      { text: "Aryabhattiya", correct: false },
      { text: "Hora Shastra", correct: true },
      { text: "Brahma Siddhanta", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const btn = document.querySelector(".btn");
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
