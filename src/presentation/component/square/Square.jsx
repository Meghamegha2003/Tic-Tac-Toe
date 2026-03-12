import React from 'react';
import "./square.css"

function Square({onClick,value}) {
  return (
    <div className="square-container">
      <button className="square-btn" onClick={onClick}>
       {value}
      </button>
    </div>
  );
}

export default Square;