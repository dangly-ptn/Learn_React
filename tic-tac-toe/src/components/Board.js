import React, { useState } from "react";
import Square from "./Square";
import { data } from '../data'

export default function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  })

  function handleClick(i) {
    if (calculateWinner(state.squares) || state.squares[i]) return
    state.squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      ...state,
      squares: state.squares,
      xIsNext: !state.xIsNext
    })
  }

  function renderSquare(i) {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  function calculateWinner(squares) {
    for (let i = 0; i < data.length; i++) {
      const [first, second, third] = data[i]
      if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
        return squares[first]
      }
    }
    return null
  }

  const winner = calculateWinner(state.squares)
  let status
  winner
    ? status = `Winner: ${winner}`
    : status = `Next player: ${state.xIsNext ? 'X' : 'O'}`

  return (
    <div>
      <div className="player">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
