import React from "react";
import "./CommunityFeedback.css";

const CommunityFeedback = () => {
  return (
    <div className="community-feedback-container">
      <h3 className="community-feedback-title">Comminity Feedback</h3>
      <h4 className="community-feedback-subtitle">Mostly Positive</h4>
      <div className="colorindicator-container">
        <span className="red-color"></span>
        <span className="yellow-color"></span>
        <span className="green-color"></span>
      </div>

      <div className="feedback-container">
        <div className="negative-container">
          <p className="feedback-name">Negative</p>
          <p className="feedback-number">12</p>
        </div>
        <div className="neutral-container">
          <p className="feedback-name">Neutral</p>
          <p className="feedback-number">34</p>
        </div>
        <div className="positive-container">
          <p className="feedback-name">Positive</p>
          <p className="feedback-number">134</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
