import { GameFieldGrid } from "../styles/GameField.styles";

import GameBlock from "./GameBlock";

export default function GameField() {
  return (
    <GameFieldGrid
      css={{
        marginTop: "5%",
        width: "700px",
        height: "700px",
      }}
    >
      {Array.from({ length: 9 }).map(() => (
        <GameBlock />
      ))}
    </GameFieldGrid>
  );
}
