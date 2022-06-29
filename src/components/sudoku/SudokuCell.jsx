import React from "react";

import { SudokuCellInput } from "../../styles/sudoku/SudokuCell.styles";

export default function SudokuCell({ cell }) {
  const cellValue = cell !== 0 ? cell : "";

  const [inputValue, setInputValue] = React.useState(cellValue);

  return (
    <SudokuCellInput
      type="text"
      pattern="[1-9]*"
      maxLength={1}
      value={inputValue}
      onChange={(event) =>
        setInputValue(event.target.validity.valid ? event.target.value : "")
      }
    />
  );
}
