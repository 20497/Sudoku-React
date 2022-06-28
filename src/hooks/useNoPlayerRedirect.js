import React from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import { appRoutes } from "../appRoutes";

export default function useNoPlayerRedirect() {
  const { gameState } = React.useContext(GameContext);
  const navigate = useNavigate();

  const noPlayerRedirect = React.useCallback(() => {
    if (gameState.playerName === "") {
      navigate(appRoutes.HOME);
    }
  }, [gameState.playerName, navigate]);

  return { noPlayerRedirect };
}
