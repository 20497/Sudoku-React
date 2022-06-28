import { globalCss } from "@stitches/react";

import { stitchesGlobalSettings } from "./stitches.config";

const colors = stitchesGlobalSettings.colors;

export const globalStyles = globalCss({
  "*": { boxSizing: "border-box", color: colors.black },
  body: {
    margin: "0",
    background: colors.white,
    fontFamily: stitchesGlobalSettings.font,
  },
  ul: { margin: "0", padding: "0", listStyleType: "none" },
  a: {
    textDecoration: "none",
    display: "block",
    color: "inherit",
  },
});
