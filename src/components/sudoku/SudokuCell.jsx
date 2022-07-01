import React from "react";

import { SudokuCellInput } from "../../styles/sudoku/SudokuCell.styles";

export default function SudokuCell({ cell, register, cellFormIndex, errors }) {
  const isStaticCell = cell !== 0
  const cellValue = isStaticCell ? cell : "";

  const [inputValue, setInputValue] = React.useState(cellValue);

  const isCellValid = !errors[cellFormIndex] || inputValue === "";

  return isStaticCell ? <SudokuCellInput
      value={cell}
      readOnly
    /> 
    : 
    <SudokuCellInput
      css={{
        background: isCellValid ? "inherit" : "$red",
      }}
      type="text"
      pattern="[1-9]*"
      maxLength={1}
      value={inputValue}
      {...register}
      onChange={(event) =>
        setInputValue(event.target.validity.valid ? event.target.value : 0)
      }
    />
  ;
}
