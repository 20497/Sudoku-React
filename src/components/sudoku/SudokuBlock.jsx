import { SudokuBlockGrid } from "../../styles/sudoku/SudokuBlock.styles";
import SudokuCell from "./SudokuCell";

export default function SudokuBlock({ block, blockIndex }) {
  return (
    <SudokuBlockGrid>
      {block.map((cell, index) => (
        <SudokuCell key={`cell-${blockIndex}-${index}`} cell={cell} />
      ))}
    </SudokuBlockGrid>
  );
}
