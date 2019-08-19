import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">Su Puntuación:  {score} / 5 respuestas correctas!</div>
    <button className="playBtn" onClick={playAgain}>
      Jugar Otra Vez!
    </button>
  </div>
);

export default Result;
