export function createGame(){
    return {
        board: Array(9).fill(null),
        currentPlayer: "X",
        winner: null
    }
}