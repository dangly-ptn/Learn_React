import React from "react";
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

export default function Main(props) {

  const correctAnswerArray = props.questions[0].correct_answer
  let myAnswersArray = []
  const [correct, setCorrect] = React.useState(false)

  function handleChange(answer) {
    if ((correctAnswerArray.indexOf(answer) > -1)) {
      myAnswersArray.indexOf(answer) === -1 && myAnswersArray.push(answer)
    }
  }

  function checkAnswer() {
    if (myAnswersArray.length === 5) {
      setCorrect(true)
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function setAnswer(answersArray) {
    const shuffleAnswersArray = shuffleArray(answersArray)
    return shuffleAnswersArray.map(shuffleAnswer => (
      <label className="checkbox">
        <input type="checkbox"
          onChange={() => handleChange(shuffleAnswer)}
          key={nanoid()}
        />
        {shuffleAnswer}
      </label>
    ))
  }

  const quizs = props.questions.map(quiz => (
    <div key={quiz.id}>
      <h2 className="question">{quiz.question}</h2>
      {setAnswer(quiz.answer)}
    </div>
  ))

  function restart() {
    window.location.reload();
  }

  return (
    correct ?
      <div class="container">
        <Confetti />
        <h1>Congratulations</h1>
        <button
          onClick={restart}
          className="check"
        >
          Play Again
        </button>
      </div>
      :
      <div class="container">
        {quizs}
        <button
          onClick={checkAnswer}
          className="check"
        >
          Check Answer
        </button>
      </div>
  )
}
