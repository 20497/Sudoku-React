import { styled, keyframes } from "../stitches.config";

const loadingDots = keyframes({
  "0%": { content: "" },
  "25%": { content: "." },
  "50%": { content: ".." },
  "75%": { content: "..." },
  "100%": { content: "" },
});

export const LoadingMessage = styled("p", {
  margin: "2em 0",
  fontSize: "$xxl",
  position: "relative",

  "&::after": {
    content: "",
    display: "inline-block",
    position: "absolute",
    animation: `${loadingDots} steps(1,end) 2s infinite`,
  },
});
