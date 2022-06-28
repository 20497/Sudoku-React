import React from "react";
import { Header, Main, PageTitle } from "../styles/PageLayout.styles";

export default function PageLayout({ children }) {
  return (
    <>
      <Header>
        <PageTitle>Sudoku Game</PageTitle>
      </Header>
      <Main>{children}</Main>
    </>
  );
}
