
export const saveGame = (board)=>{
 localStorage.setItem("board",JSON.stringify(board))
}

export const loadGame = () => {
  try {
    const data = localStorage.getItem("board");
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}