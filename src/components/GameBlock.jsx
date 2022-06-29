import { GameBlockGrid } from "../styles/GameBlock.styles"
import GameBox from "./GameBox";

export default function GameBlock() {
  return (
    <GameBlockGrid>
      {Array.from({ length: 9 }).map(() => (
        <GameBox />
      ))}
    </GameBlockGrid>
  );
}
