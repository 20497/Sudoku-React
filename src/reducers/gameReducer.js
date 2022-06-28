export default function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        playerName: action.playerName,
      };
    default:
      return state;
  }
}
