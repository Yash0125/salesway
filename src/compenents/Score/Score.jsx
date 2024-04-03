import React from "react";
import "./Score.css";

const Score = () => {
  return (
    <div className="score-container">
      <div className="score-top-container">
        <div className="scoreboard-container">
          <h2>78</h2>
        </div>
        <p className="score-top-description">of 100 points</p>
      </div>
      <div className="score-bottom-container">
        <h3 className="score-bottom-title">You're good!</h3>
        <p className="score-bottom-description">
          Your sales performance score is better than 80% other users{" "}
        </p>
        <p className="score-bottom-btn">Improve your score</p>
      </div>
    </div>
  );
};

export default Score;
