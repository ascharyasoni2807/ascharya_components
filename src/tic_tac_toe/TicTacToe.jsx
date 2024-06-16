import React, { useState } from "react";
import "./TicTacToe.css";
export default function Game({ size = 3 }) {
  const [squares, setSquares] = useState(Array(size * size).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(size * size).fill(null));
    setXIsNext(true);
  }

  function calculateWinner(squares) {
    const lines = [];

    // Rows
    for (let i = 0; i < size; i++) {
      lines.push(Array.from({ length: size }, (_, k) => i * size + k));
    }

    // Columns
    for (let i = 0; i < size; i++) {
      lines.push(Array.from({ length: size }, (_, k) => k * size + i));
    }

    // Diagonals
    lines.push(Array.from({ length: size }, (_, k) => k * size + k));
    lines.push(
      Array.from({ length: size }, (_, k) => k * size + (size - k - 1))
    );

    for (let line of lines) {
      const [a, b, ...rest] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        rest.every((index) => squares[a] === squares[index])
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function Square({ value, onClick }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }

  function Board({ squares, onSquareClick }) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    const renderSquare = (i) => (
      <Square key={i} value={squares[i]} onClick={() => onSquareClick(i)} />
    );

    const boardRows = Array(size)
      .fill(null)
      .map((_, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {Array(size)
            .fill(null)
            .map((_, colIndex) => renderSquare(rowIndex * size + colIndex))}
        </div>
      ));

    return (
      <>
        <div className="status">{status}</div>
        {boardRows}
      </>
    );
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onSquareClick={handleClick} />
      </div>
      <div className="game-info">
        <button className="custom-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
