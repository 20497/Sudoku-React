import { styled } from "../stitches.config";

export const Header = styled("header", {
  padding: "2%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "$gray",
});

export const PageTitle = styled("h1", {
  margin: "0",
  fontSize: "$xl",
});

export const Main = styled("main", {
  padding: "2% 10% 5% 10%",
  display: "flex",
  flexDirection: "column",
});
