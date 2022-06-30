import React from "react";
import { SudokuBlockGrid } from "../../styles/sudoku/SudokuBlock.styles";
import SudokuCell from "./SudokuCell";

export default function SudokuBlock({ block, blockIndex, register, errors }) {
  return (
    <SudokuBlockGrid>
      {block.map((cell, index) => (
        <SudokuCell
          key={`cell-${blockIndex}-${index}`}
          cell={cell}
          register={register(`${blockIndex}${index}`, { required: true })}
          cellFormIndex={`${blockIndex}${index}`}
          errors={errors}
        />
      ))}
    </SudokuBlockGrid>
  );
}
