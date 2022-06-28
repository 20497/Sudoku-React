import { createStitches } from "@stitches/react";

export const stitchesGlobalSettings = {
  colors: {
    black: "#2D2D2D",
    gray: "#C4C4C4",
    white: "#E5E5E5",
  },
  font: "Ubuntu, sans-serif",
};

export const { styled } = createStitches({
  theme: {
    colors: stitchesGlobalSettings.colors,
    fontSizes: {
      s: ".75rem",
      m: "1.5rem",
      xl: "2rem",
      big: "4rem",
    },
  },
});
