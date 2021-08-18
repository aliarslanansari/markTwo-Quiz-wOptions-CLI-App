var readlineSync = require('readline-sync')
var chalk = require('chalk')

var scores = 0

var highestScore = {
  name: 'ALI ZAKWAN',
  score: 4,
}

var questionBank = [
  {
    question: 'In which country was Elon Musk born? ',
    options: ['Romania', 'Canada', 'South Africa', 'America'],
    answer: 3,
  },
  {
    question:
      'Ever resourceful, Musk taught himself computer programming at what age? (Type in word) ',
    options: ['Eight', 'Ten', 'Twelve', 'Fourteen'],
    answer: 2,
  },
  {
    question:
      'Aged 12, Musk sold his first computer program for $500. It was a video game called what? ',
    options: ['Blastar', 'Space Invaders', 'Pacman', 'Asteroids'],
    answer: 1,
  },
  {
    question:
      'Aged 17, Musk left his homeland and moved to Canada. This saved him from what? ',
    options: [
      'Imprisonment',
      'Jury Service',
      'Community Service',
      'National Service',
    ],
    answer: 4,
  },
  {
    question:
      'In 1999, Musk founded X.com, which merged with Confinity 2 years later to become which online business? ',
    options: ['Google', 'PayPal', 'Twitter', 'Facebook'],
    answer: 2,
  },
]

function welcome() {
  var userName = readlineSync.question(chalk.blue.bold('What is your name? '))
  console.log(
    chalk.blue.bold(
      `Welcome ${chalk.underline(userName)}, do you know ELON MUSK? \n`
    )
  )
}

function askQuestion(currentQuestion, queIndex, totalQuestion) {
  console.log(
    `${chalk.bgBlue.bold(`Q. ${queIndex + 1} of ${totalQuestion}: `)} ${
      currentQuestion.question
    }`
  )
  var index = readlineSync.keyInSelect(
    currentQuestion.options,
    'Please enter correct option number',
    { cancel: false }
  )
  if (index + 1 === currentQuestion.answer) {
    scores = scores + 1
    console.log(
      chalk.bgGreen.bold('Correctly answered | Current Score: ' + scores)
    )
  } else {
    console.log(
      chalk.bgRedBright.bold('Naah! Wrong Answer | Current Score: ' + scores)
    )
  }
}

function play() {
  var totalQuestion = questionBank.length
  for (var i = 0; i < totalQuestion; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion, i, totalQuestion)
  }
}

function outro() {
  console.log(chalk.cyan.bold('\nYour Final SCORE: ', scores))
  console.log(
    '\nCurrent Highest Score: ' +
      highestScore.score +
      ' made by ' +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      '\nCongratulations!!! You have made new record by scoring ' +
        scores +
        '\n'
    )
    console.log('Contact me to update the this')
  }
}

welcome()
play()
outro()
