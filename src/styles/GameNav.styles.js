import { styled, keyframes } from "../stitches.config";
import { GameDataSpan } from "./templates/GameDataSpan.styles";

const underline = keyframes({
  "0%": { width: "0%" },
  "100%": { width: "100%" },
});

export const NavMenu = styled("nav", {
  width: "100%",
  alignSelf: "end",
});

export const MenuList = styled("ul", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

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

export const MenuListItemWrapperList = styled("ul", {
  display: "flex",
  flexDirection: "column",
});

export const Player = GameDataSpan;

export const DificultLevel = GameDataSpan;
