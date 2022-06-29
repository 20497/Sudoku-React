import { styled } from "../../stitches.config";

export const SudokuGridLayout = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  border: "2px solid $black",
});
