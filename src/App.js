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

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  console.log("Treasure Location:", treasureLocation);
  console.log("Bomb Location:", bombLocation);

  const handleGamePlay = (index) => {
    //alert(index);
    let updatedBoard = [...board];
    if (treasureLocation === bombLocation) {
      setBombLocation(treasureLocation - 1);
    } else if (index === treasureLocation) {
      updatedBoard[index] = "💰";
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣";
    } else {
      updatedBoard[index] = "🏝️";
    }
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
