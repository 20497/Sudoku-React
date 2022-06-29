import { styled } from "../stitches.config";
import { ValidationMessage } from "./templates/ValidationMessage.styles";

export const Wrapper = styled("label", {
  position: "relative",
  width: "20%",
});

export const RadioButton = styled("input", {
  padding: "1rem",
  height: "100%",
  width: "100%",
  background: "$white",
  borderRadius: "5px",
  border: "2px solid $black",

  "&[type=radio]": {
    "-webkit-appearance": "none",
    appearance: "none",
    font: "inherit",
    margin: "0",
  },

  "&[type=radio]:checked": {
    background: "$gray",
  },
});

export const Name = styled("span", {
  color: "$black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});

export const ValidationRadioMessage = ValidationMessage;