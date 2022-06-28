import React from "react";
import gameReducer from "../reducers/gameReducer";
import { gameInitState } from "../states/gameInitState";
import { GameContext } from "./GameContext";

export default function GameContextProvider({ children }) {
  const [gameState, gameDispatch] = React.useReducer(
    gameReducer,
    gameInitState,
    (init) => init
  );

  const gameContextValue = React.useMemo(
    () => ({
      gameState,
      gameDispatch,
    }),
    [gameState]
  );

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
}
