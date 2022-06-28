import React from "react";
import { Link } from "react-router-dom";
import {
  NavMenu,
  MenuList,
  MenuListItem,
  Player,
} from "../styles/GameNav.styles";
import { appRoutes } from "../appRoutes";
import { GameContext } from "../context/GameContext";

export default function GameNav() {
  const { gameState } = React.useContext(GameContext);

  return (
    <NavMenu>
      <MenuList>
        <MenuListItem>
          <Player>PLAYER: {gameState.playerName}</Player>
        </MenuListItem>
        <MenuListItem>
          <Link to={appRoutes.STATISTICS}>Statystyki</Link>
        </MenuListItem>
      </MenuList>
    </NavMenu>
  );
}
