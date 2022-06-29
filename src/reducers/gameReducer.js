export default function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        playerName: action.playerName,
      };
    // We need to handle solution for game features
    case "HANDLE_SUDOKU_BOARD":
      return {
        ...state,
        board: action.board,
        solution: action.solution,
      };
    default:
      return state;
  }
}
