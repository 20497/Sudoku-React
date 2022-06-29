import React from "react";
import PageLayout from "../components/PageLayout";
import GameNav from "../components/GameNav";
import useNoPlayerRedirect from "../hooks/useNoPlayerRedirect";
import SudokuBoard from "../components/sudoku/SudokuBoard";

export default function GamePage() {
  const { noPlayerRedirect } = useNoPlayerRedirect();

  React.useEffect(() => {
    noPlayerRedirect();
  }, [noPlayerRedirect]);

  return (
    <PageLayout>
      <GameNav />
      <SudokuBoard />
    </PageLayout>
  );
}
