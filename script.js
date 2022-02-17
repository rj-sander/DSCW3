const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const contextContainer = document.getElementById('contextContainer')
const contextElement = document.getElementById('context')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const results = document.getElementById('results')
const resultsContainer = document.getElementById('resultsContainer')
const answerButtonsElement = document.getElementById('answerButtons')
const rightWrong = document.getElementById("rightWrong")
let shuffledQuestions, currentQuestionIndex
var score = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
  resultsContainer.classList.add('hide')
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  contextElement.innerText = question.context
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  contextContainer.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  contextContainer.classList.remove('hide')
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct) {
    rightWrong.innerText = "Correct!"
    score++
    console.log(score)
  } else {
    rightWrong.innerText = "Wrong"

  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
    results.innerText = "You got " + score + " answers right, out of " + questions.length
    resultsContainer.classList.remove('hide')
    score = 0
  }


}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "What is the maximum time limit for police to detain you without arrest?",
    answers: [
      {text: '36 hours', correct: false},
      {text: 'No set limit', correct: false},
      {text: '24 hours', correct: true},
      {text: 'You cannot be detained without an arrest', correct: false}
    ],
    context: "Police are allowed to detain you for longer than 24 hours in specific circumstances including suspicion of terrorism, but 24 hours is the standard limit"
  },
  {
    question: "Do you have a right to make a phone call once arrested?",
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ],
    context: "You have the right for some one to be notified of your arrest, but this isn't necessarily a phone call you are allowed to make yourself"
  },
  {
    question: "Can the police enter your home without a warrant?",
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ],
    context: "In specific circumstances police can enter your house without a warrant, this includes to prevent loss of life or destruction of property."
  },
  {
    question: "Do police need to provide a reason to search you?",
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true},
    ],
    context: "Usually police must provide a reason, however there are exceptions, in particular if there has been an act of violence or terrorism in the area in the last 48 hours"
  },
  {
    question: "Should I resist arrest if I believe I am being unlawfully charged?",
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true},
    ],
    context: "Resisting arrest is a crime within itself you can be charged with regardless of whether the arrest is lawful or not, so advice from solicitors is not to resist as it can damage any case you may make against the police force going forward"
  },
  {
    question: "If arrested, should I speak to police without a solicitor?",
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ],
    context: "You should never speak to a police officer without a solicitor present, even if they frame it as a casual chat it can still be used against you. Having a solicitor present is free and is your right"
  },
  {
    question: "Do I have the right to see a copy of the warrant being used for a search of my home?",
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ],
    context: "If asked the police must provide a copy of any warrants they may have obtained in order to enter your home"
  },
  {
    question: "Police do not have to provide any recording if I am stopped and searched",
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ],
    context: "When asked, police are legally obliglated to provide a written record if you are stopped and searched."
  }
]
