import { styled } from "../../stitches.config";

export const SudokuCellInput = styled("input", {
  padding: "1rem",
  width: "100%",
  height: "100%",
  appearance: "none",
  border: "2px solid $black !important",
  background: "$white",
  fontFamily: "inherit",
  fontSize: "2rem",
  textAlign: "center",

  "&::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  "&[type=number]": {
    "-moz-appearance": "textfield",
  },

  "&:focus": {
    outline: "none",
  },
});
