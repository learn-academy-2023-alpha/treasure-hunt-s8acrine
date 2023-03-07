import React from "react";

const GameStatus = ({ guessesLeft, resetBoard }) => {
  return (
    <>
      <div id="gameButtons">
        <p>Guesses Remaining: {guessesLeft}</p>
        <button id="resetButton" onClick={resetBoard}>
          Reset Board
        </button>
      </div>
    </>
  );
};

export default GameStatus;
