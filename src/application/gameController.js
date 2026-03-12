import { makeMove } from "../domine/useCase/makeMove";
import { resetGame } from "../domine/useCase/resetGame";

export function playMove(game,index){
    return makeMove(game,index)
}

export function restart(){
    return resetGame()
}