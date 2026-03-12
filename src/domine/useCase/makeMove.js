
import { checkWinner } from "./checkWinner"
export function makeMove(game,index){
    if(game.board[index] || game.winner)return game
    const newBoard = [...game.board]
    newBoard[index]=game.currentPlayer
    const winner = checkWinner(newBoard)
    return{
        board:newBoard,
        currentPlayer:game.currentPlayer === "X" ? "O" : "X",
        winner
    }
}