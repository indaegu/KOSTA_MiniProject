import React from "react";

const Card = ({ rank, score, nickname }) => {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-rank">{rank}</span>
          <span className="card-score">{score}</span>
          <span className="card-nickname">{nickname}</span>
        </div>
      </div>
    );
  };
  
  export default Card;