import { makeMove } from "../domine/useCase/makeMove";
import { resetGame } from "../domine/useCase/resetGame";
import { loadGame, saveGame } from "../infrastructure/storage";

export function playMove(game,index){
    const updatedGame =  makeMove(game,index)
    saveGame(updatedGame)
    return updatedGame
}

export function restart(){
    const newGame = resetGame()
    saveGame(newGame)
    return newGame
}

export function loadSavedGame() {
  const saved = loadGame()
  return saved && saved.board ? saved : resetGame()
}