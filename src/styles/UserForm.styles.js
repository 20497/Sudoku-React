import { styled } from "../stitches.config";

export const Form = styled("form", {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",

  "& > *": {
    marginBottom: "20%",
  },

  "& > *:last-child": {
    marginBottom: "0",
  },
});

export const RadioWrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
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
