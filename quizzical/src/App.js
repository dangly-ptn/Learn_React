import React from 'react'
import Main from './Main'
import { nanoid } from 'nanoid'

export default function App() {

  const [quizsData, setquizsData] = React.useState([])
  const correctAnswerArray = []

  function startQuiz() {
    fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setquizsData(data.results))
  }

  function pushArray(firstArray, secondArray) {
    firstArray.push(secondArray)
    return firstArray
  }

  const questions = quizsData.map(question => ({
    id: nanoid(),
    question: question.question,
    answer: pushArray(question.incorrect_answers, question.correct_answer),
    correct_answer: pushArray(correctAnswerArray, question.correct_answer)
  }))

  return (
    quizsData.length > 0 ?
      <Main questions={questions} />
      :
      <div class="container">
        <h1>Quizzical</h1>
        <h3>Some description if needed</h3>
        <button
          onClick={startQuiz}
          className="check"
        >
          Start quiz
        </button>
      </div>
  )
}
