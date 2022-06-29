import React from "react";
import { Link } from "react-router-dom";
import {
  NavMenu,
  MenuList,
  MenuListItem,
  Player,
  MenuListItemWrapperList,
} from "../styles/GameNav.styles";
import { appRoutes } from "../appRoutes";
import { GameContext } from "../context/GameContext";

export default function GameNav() {
  const { gameState } = React.useContext(GameContext);

  return (
    <NavMenu>
      <MenuList>
        <MenuListItem>
          <MenuListItemWrapperList>
            <Player>PLAYER: {gameState.playerName}</Player>
            <Player>
              LEVEL: {gameState.dificultLevel}&nbsp;
              {gameState.dificultLevel === "random" && (
                <Player>({gameState.solution.difficulty})</Player>
              )}
            </Player>
          </MenuListItemWrapperList>
        </MenuListItem>
        <MenuListItem>
          <Link to={appRoutes.STATISTICS}>Statistics</Link>
        </MenuListItem>
      </MenuList>
    </NavMenu>
  );
}
