import { styled } from "../../stitches.config";
import { SudokuGridLayout } from "../templates/SudokuGrid.styles";
import { ValidationMessage } from "../templates/ValidationMessage.styles";

export const SudokuWrapper = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > *": {
    marginBottom: "5%",
  },

  "& > *:last-child": {
    marginBottom: "0",
  },
});

export const SudokuValidationMessage = ValidationMessage;

export const SudokuFieldGrid = SudokuGridLayout;

export const SudokuSolveButton = styled("input", {
  appearance: "none",
  border: "none",
  padding: "1%",
  width: "50%",
  fontFamily: "inherit",
  background: "$black",
  color: "$white",
  fontSize: "$m",
});
