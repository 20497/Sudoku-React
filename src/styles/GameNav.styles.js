import { styled, keyframes } from "../stitches.config";

const underline = keyframes({
  "0%": { width: "0%" },
  "100%": { width: "100%" },
});

export const NavMenu = styled("nav", {
  alignSelf: "end",
});

export const MenuList = styled("ul", {});

export const MenuListItem = styled("li", {
  "& a": {
    position: "relative",
    fontSize: "$m",
  },

  "& a:hover::before": {
    content: "",
    display: "block",
    height: "2px",
    background: "$black",
    position: "absolute",
    top: "100%",
    animation: `${underline} 200ms forwards`,
  },
});
