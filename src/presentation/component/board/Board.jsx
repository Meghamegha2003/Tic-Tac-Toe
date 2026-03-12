import React from 'react';
import Square from '../square/Square';
import './Board.css';

function Board({board,onClick}) {
  return (
    <div className="board">
      {board.map((value,i)=>{
        return <Square key={i} value={value} onClick={()=>onClick(i)} />
      })}
    </div>
  );
}

export default Board;