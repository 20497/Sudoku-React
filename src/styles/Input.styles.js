import { styled } from "../stitches.config";
import { ValidationMessage } from "./templates/ValidationMessage.styles";

export const Wrapper = styled("label", {
  width: "100%",
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

export const ValidationInputMessage = ValidationMessage;
