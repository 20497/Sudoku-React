import { createStitches } from "@stitches/react";

export const stitchesGlobalSettings = {
  colors: {
    black: "#2D2D2D",
    gray: "#C4C4C4",
    white: "#E5E5E5",
    red: "#E74E4E",
  },
  font: "Ubuntu, sans-serif",
};

export const { styled, keyframes } = createStitches({
  theme: {
    colors: stitchesGlobalSettings.colors,
    fontSizes: {
      s: "1rem",
      m: "1.6rem",
      xl: "2.5rem",
      xxl: "4rem",
    },
  },
});
