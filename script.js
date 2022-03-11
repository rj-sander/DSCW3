// Defines all necessary HTML elements in QuizApp file as javascript elements according to their id tags
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
const intro = document.getElementById('intro-container')
// Creates the variables needed to created a shuffled question deck
let shuffledQuestions, currentQuestionIndex
// Creates score variable to track the users score, and an array to record which anwer choices they made
var score = 0
let choicesArray = []
// Event listeners for both game buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
// Every time the next button is clicked, one is added to the question index, and this is used to bring up the next question
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log('Started') // To confirm it's working
  startButton.classList.add('hide') // Take away the start button
  intro.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5) // creates a shuffled list
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide") // shows the question
  setNextQuestion()
  resultsContainer.classList.add('hide') // hides the results container (if show, ie when restarting)
}
// defines the function to set the next question including resetting the attributes that revealed the answer of the previous question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  // fills question and context element with relevant text from the array
  questionElement.innerText = question.question
  contextElement.innerText = question.context
  question.answers.forEach(answer => {
    const button = document.createElement('button') // creates a button for each answer
    button.innerText = answer.text //fills in the text of each button
    button.classList.add('button')
    button.setAttribute("data-choice", answer.choice) // gives each button a data attribute corresponding to a unique number for each answer in the quiz
    if (answer.correct) {
      button.dataset.correct = answer.correct // the value "correct" is taken from the questions array and is made a data variable
    }
    button.addEventListener('click', selectAnswer) // each button will start the selectAnswer function if clicked
    answerButtonsElement.appendChild(button) // gives each button element a "button" id
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
  contextContainer.classList.remove('hide') // reveals the context element
  const selectedButton = e.target // defines the button that has been clicked as a variable
  const correct = selectedButton.dataset.correct // assigns the 'correct' value from the element
  const choice = selectedButton.getAttribute("data-choice") // assigns the number from the choice element of the array to a variable
  if (correct) {  // if correct is true
    rightWrong.innerText = "Correct!"
    score++ // adds 1 to the score
    console.log(score) // prints the score as a check
  } else {
    rightWrong.innerText = "Wrong"

  }
  choicesArray.push(choice) // adds the unique number from the chosen answer to the array, logging which answers were chosen throughout the quiz
  console.log(choicesArray) // to check
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) { // if all the questions haven't been asked
  nextButton.classList.remove('hide')
} else { // if we're at the end of the question index
    startButton.innerText = "Restart" // changes text of start button to restart, as it serves the same function
    startButton.classList.remove('hide') // reveals the button
    results.innerText = "You got " + score + " answers right, out of " + questions.length // prints score info
    resultsContainer.classList.remove('hide') // reveals the score info
    choicesArray.push(score) // adds total score to the end of the choices array
    console.log(choicesArray) // prints on the console as a check
    score = 0 //resets the score variable for a new game
    choicesArray = [] // resets choices array for the new game
  }


}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct') // if correct:true in the array, adds the 'correct' class to the element (button)
  } else {
    element.classList.add('wrong')  // if correct:false in the array, adds the 'wrong' class to the element (button)
  }
}

function clearStatusClass(element) { //removes correct/wrong attributes from elements so as to reset the quiz questions
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// questions array!
const questions = [
  {
    question: "What is the maximum time limit for police to detain you without arrest?",
    answers: [
      {choice: 1, text: '36 hours', correct: false},
      {choice: 2, text: 'No set limit', correct: false},
      {choice: 3, text: '24 hours', correct: true},
      {choice: 4, text: 'You cannot be detained without an arrest', correct: false}
    ],
    context: "Police are allowed to detain you for longer than 24 hours in specific circumstances including suspicion of terrorism, but 24 hours is the standard limit"
  },
  {
    question: "Do you have a right to make a phone call once arrested?",
    answers: [
      {choice: 5, text: 'Yes', correct: false},
      {choice: 6, text: 'No', correct: true}
    ],
    context: "You have the right for some one to be notified of your arrest, but this isn't necessarily a phone call you are allowed to make yourself"
  },
  {
    question: "Can the police enter your home without a warrant?",
    answers: [
      {choice: 7, text: 'Yes', correct: true},
      {choice: 8, text: 'No', correct: false}
    ],
    context: "In specific circumstances police can enter your house without a warrant, this includes to prevent loss of life or destruction of property."
  },
  {
    question: "Do police need to provide a reason to search you?",
    answers: [
      {choice: 9, text: 'Yes', correct: false},
      {choice: 10, text: 'No', correct: true},
    ],
    context: "Usually police must provide a reason, however there are exceptions, in particular if there has been an act of violence or terrorism in the area in the last 48 hours"
  },
  {
    question: "Should I resist arrest if I believe I am being unlawfully charged?",
    answers: [
      {choice: 11, text: 'Yes', correct: false},
      {choice: 12, text: 'No', correct: true},
    ],
    context: "Resisting arrest is a crime within itself you can be charged with regardless of whether the arrest is lawful or not, so advice from solicitors is not to resist as it can damage any case you may make against the police force going forward"
  },
  {
    question: "If arrested, should I speak to police without a solicitor?",
    answers: [
      {choice: 13, text: 'Yes', correct: false},
      {choice: 14, text: 'No', correct: true}
    ],
    context: "You should never speak to a police officer without a solicitor present, even if they frame it as a casual chat it can still be used against you. Having a solicitor present is free and is your right"
  },
  {
    question: "Do I have the right to see a copy of the warrant being used for a search of my home?",
    answers: [
      {choice: 15, text: 'Yes', correct: true},
      {choice: 16, text: 'No', correct: false}
    ],
    context: "If asked the police must provide a copy of any warrants they may have obtained in order to enter your home"
  },
  {
    question: "Police do not have to provide any recording if I am stopped and searched",
    answers: [
      {choice: 17, text: 'Yes', correct: true},
      {choice: 18, text: 'No', correct: false}
    ],
    context: "When asked, police are legally obliglated to provide a written record if you are stopped and searched."
  }
]
