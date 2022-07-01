import React from "react";
import {
  SudokuFieldGrid,
} from "../../styles/sudoku/SudokuBoard.styles";
import SudokuBlock from "./SudokuBlock";

export default function GameGrid({ board, register, errors }) {
  return (
    <SudokuFieldGrid
      css={{
        marginTop: "5%",
        width: "700px",
        height: "700px",
      }}
    >
      {board.map((block, index) => {
        return (
          <SudokuBlock
            key={`block-${index}`}
            block={block}
            blockIndex={index}
            register={register}
            errors={errors}
          />
        )
      })}
    </SudokuFieldGrid>
  )
}
