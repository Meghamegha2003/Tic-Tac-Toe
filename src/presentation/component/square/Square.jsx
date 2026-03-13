import React, { useState, useEffect } from 'react';
import "./square.css";

function Square({ onClick, value }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!value) {
      setIsFlipped(false);
    } else {
      setIsFlipped(true);
    }
  }, [value]);

  const handleFlip = () => {
    if (value || isFlipped) return;
    if (onClick) onClick();
  };

  return (
    <div className="square-container">
      <div 
        className={`square-inner ${isFlipped ? 'is-flipped' : ''}`} 
        onClick={handleFlip}
      >
        <div className="square-front"></div>
        <div className="square-back">
          <span className={value === 'X' ? 'text-x' : 'text-o'}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Square;