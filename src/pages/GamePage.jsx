import React from "react";
import PageLayout from "../components/PageLayout";
import GameNav from "../components/GameNav";
import useNoPlayerRedirect from "../hooks/useNoPlayerRedirect";

export default function GamePage() {
  const { noPlayerRedirect } = useNoPlayerRedirect();

  React.useEffect(() => {
    noPlayerRedirect();
  }, [noPlayerRedirect]);

  return (
    <PageLayout>
      <GameNav />
      <div>GamePage</div>
    </PageLayout>
  );
}
