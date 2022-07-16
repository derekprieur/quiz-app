const startBtn = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerElements = document.getElementById('answer-buttons')

const questions = [
    {
        question: 'Which is the largest planet in the solar system?',
        answers: [
            { text: 'Jupiter', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Neptune', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'Which big cat is the largest?',
        answers: [
            { text: 'Lion', correct: false },
            { text: 'Cheetah', correct: false },
            { text: 'Tiger', correct: true },
            { text: 'Jaguar', correct: false }
        ]
    },
    {
        question: 'Which type of fish is Nemo?',
        answers: [
            { text: 'Lionfish', correct: false },
            { text: 'Clownfish', correct: true },
            { text: 'Angelfish', correct: false },
            { text: 'Triggerfish', correct: false }
        ]
    },
    {
        question: 'Which color is an emerald?',
        answers: [
            { text: 'Green', correct: true },
            { text: 'Blue', correct: false },
            { text: 'Red', correct: false },
            { text: 'White', correct: false }
        ]
    },
    {
        question: 'Which is the world’s largest ocean?',
        answers: [
            { text: 'Atlantic ocean', correct: false },
            { text: 'Indian ocean', correct: false },
            { text: 'Arctic ocean', correct: false },
            { text: 'Pacific ocean', correct: true }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent Van Gogh', correct: false },
            { text: 'Leonardo Da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'The Yellow', correct: false },
            { text: 'The Amazon', correct: false },
            { text: 'The Nile', correct: true },
            { text: 'The Congo', correct: false }
        ]
    },
    {
        question: 'Which is the largest continent?',
        answers: [
            { text: 'Asia', correct: true },
            { text: 'North America', correct: false },
            { text: 'Africa', correct: false },
            { text: 'Europe', correct: false }
        ]
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            { text: 'Thomas Edison', correct: false },
            { text: 'Benjamin Franklin', correct: false },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Alexander Graham Bell', correct: true }
        ]
    },
    {
        question: 'Who wrote Romeo and Juliet',
        answers: [
            { text: 'Charles Dickens', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Ernest Hemingway', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
]
let randomQuestions = []
let currentQuestion = 0

startBtn.addEventListener('click', () => {
    questionContainer.classList.remove('hide')
    startBtn.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion()
})

nextButton.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion()
})

function setNextQuestion() {
    resetCard()
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerElements.append(button)
    })
}

function resetCard() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerElements.firstChild) {
        answerElements.removeChild(answerElements.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}