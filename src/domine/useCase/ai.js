export function findCriticalMove(board, player) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let line of lines) {
    const [a,b,c] = line;
    const cells = [board[a], board[b], board[c]];
    if (cells.filter(cell => cell === player).length === 2 && cells.includes(null)) {
      return line[cells.indexOf(null)];
    }
  }
  return null;
}

export function makeMachineMove(game, playMoveFn) {
  const board = game.board;
  let move = findCriticalMove(board, "O");
  if (move === null) move = findCriticalMove(board, "X");
  if (move === null && board[4] === null) move = 4;
  if (move === null) {
    const corners = [0,2,6,8].filter(i => board[i] === null);
    if (corners.length>0) move = corners[Math.floor(Math.random()*corners.length)];
  }
  if (move === null) {
    const emptyCells = board.map((cell,i)=>cell===null?i:null).filter(i=>i!==null);
    if (emptyCells.length===0) return game;
    move = emptyCells[Math.floor(Math.random()*emptyCells.length)];
  }
  return playMoveFn(game, move);
}