const startButton = document.getElementById('startButton')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer() {

}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      {text: '4', correct: true},
      {text: '3', correct: false},
      {text: '2', correct: false},
      {text: '1', correct: false}
    ]
  }
]
