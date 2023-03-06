import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const handleGamePlay = (index) => {
    //alert(index);
    let updatedBoard = [...board];
    updatedBoard[index] = "🏝️";
    setBoard(updatedBoard);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>

      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
