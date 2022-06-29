import React from "react";
import PageLayout from "../components/PageLayout";
import GameNav from "../components/GameNav";
import useNoPlayerRedirect from "../hooks/useNoPlayerRedirect";
import GameField from "../components/GameField";

export default function GamePage() {
  const { noPlayerRedirect } = useNoPlayerRedirect();

  React.useEffect(() => {
    noPlayerRedirect();
  }, [noPlayerRedirect]);

  return (
    <PageLayout>
      <GameNav />
      <GameField />
    </PageLayout>
  );
}
