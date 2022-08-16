import React, { useState } from "react";
import { calculateWiner } from "../../helpers";

import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });

  const winner = calculateWiner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    console.log(boardCopy[index]);
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    setState({
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
