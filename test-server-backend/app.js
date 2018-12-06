require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  port: process.env.DB_PORT
})

function getQuizList () {
  connection.connect()
  connection.query('SELECT quizID,quizName FROM quiz', function (err, quizzes) {
    if (err) throw err
    var size = Object.keys(quizzes).length
    var quizList = []
    console.log('The DB has ', size, 'quizzes ', quizzes[0])
    for (var i = 0; i < size; i++) {
      var temp = []
      temp.push(quizzes[i].quizID)
      temp.push(quizzes[i].quizName)
      quizList.push(temp)
    }
    const quizListString = JSON.stringify(quizList)
    console.log(quizListString)
    return quizListString
  })
  connection.end()
}

function getQuestion (qID) {
  connection.connect()
  const fQ = qID * 5 + 1
  connection.query('SELECT * FROM question WHERE questionID = ' + fQ + ' OR questionID = ' + (fQ + 1) + ' OR questionID = ' + (fQ + 2) + ' OR questionID = ' + (fQ + 3) + ' OR questionID = ' + (fQ + 4), function (err, qRow) {
    if (err) throw err
    var questionsArray = []
    console.log('First question: ', qRow[0].question)
    for (var i = 0; i < 5; i++) {
      var temp = []
      temp.push(qRow[i].questionID)
      temp.push(qRow[i].question)
      temp.push(qRow[i].choice1)
      temp.push(qRow[i].choice2)
      temp.push(qRow[i].choice3)
      temp.push(qRow[i].choice4)
      temp.push(qRow[i].answer)
      questionsArray.push(temp)
    }
    const questionsArrayString = JSON.stringify(questionsArray)
    console.log(questionsArrayString)
    return questionsArrayString
  })
  connection.end()
}

// connection.connect()
// getQuizList()
// getQuestion(1)
// connection.end()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(JSON.stringify({ Hello: 'World' })
  )
})

app.listen(process.env.DB_PORT || 8081, function () {
  console.log(`Example listening on port ${process.env.DB_PORT}`)
})
