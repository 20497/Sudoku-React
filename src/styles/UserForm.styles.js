import { styled } from "../stitches.config";

export const Form = styled("form", {
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > *": {
    marginBottom: "3%",
  },

  "& > *:last-child": {
    marginBottom: "0",
  },
});

export const SubmitButton = styled("input", {
  appearance: "none",
  border: "none",
  borderRadius: "5px",
  background: "$black",
  color: "$white",
  fontSize: "$m",
  padding: "3%",
  cursor: "pointer",
});
