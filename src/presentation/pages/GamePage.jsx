import { useEffect, useState } from "react";
import Board from "../component/board/Board";
import "./gamePage.css";
import { loadSavedGame, playMove, restart } from "../../application/gameController";

function GamePage({darkMode,setDarkMode}) {

    const [game,setGame] = useState(loadSavedGame())
    const [message,setMessage] = useState("")

    function handleClick(index){
      const update = playMove(game,index)
      setGame(update)
    }

    

    useEffect(() => {

    if (game.winner) {
      setMessage(`🎉 Player ${game.winner} wins the game!`);
    } 
     if (!game.winner && game.board.every(cell => cell !== null)) {
      setMessage("🤝 It's a draw!");
    }
    

  }, [game]);

  return (
    <div className="game-page">
      <div className="header">
        <h1 className="game-title">Tic Tac Toe</h1>
        <label className="theme">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </div>
       <div className="board-wrapper">
        <Board onClick={handleClick} board={game.board} />
      </div>
      
      <button className="restart-btn"  onClick={()=>{setGame(restart()); localStorage.removeItem("board");}}>
  Restart
</button>

      {message && (
        <div className="popup">
          <h2>{message}</h2>
          <button
            onClick={() => {
              setGame(restart());
              setMessage("");
              localStorage.removeItem("board")
            }}
          >
            Play Again
          </button>
        </div>
      )}

    </div>
  );
}

export default GamePage;
