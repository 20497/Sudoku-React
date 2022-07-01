import React from "react";

import { SudokuCellInput } from "../../styles/sudoku/SudokuCell.styles";

export default function SudokuCell({ cell, register, cellFormIndex, errors }) {
  const cellValue = cell !== 0 ? cell : "";

  const [inputValue, setInputValue] = React.useState(cellValue);

  const isCellvalid = errors[cellFormIndex] && inputValue === "";

  return (
    <SudokuCellInput
      css={{
        background: isCellvalid ? "$red" : "inherit",
      }}
      type="text"
      pattern="[1-9]*"
      maxLength={1}
      value={inputValue}
      {...register}
      readOnly={cell !== 0 ? true : false}
      onChange={(event) =>
        setInputValue(event.target.validity.valid ? event.target.value : "")
      }
    />
  );
}
