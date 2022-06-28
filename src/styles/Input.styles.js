import { styled } from "../stitches.config";

export const Wrapper = styled("label", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Label = styled("span", {
  fontSize: "$m",
});

export const Textfield = styled("input", {
  appearance: "none",
  background: "inherit",
  fontFamily: "inherit",
  border: "2px solid $gray",
  borderRadius: "5px",
  fontSize: "$m",
  padding: "3%",

  "&:focus-visible": {
    outline: "none",
    borderWidth: "3px",
  },
});

export const ValidationMessage = styled("p", {
  color: "$red",
});
