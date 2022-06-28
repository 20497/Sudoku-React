import React from "react";
import PageLayout from "../components/PageLayout";
import GameNav from "../components/GameNav";

export default function GamePage() {
  return (
    <PageLayout>
      <GameNav />
      <div>GamePage</div>
    </PageLayout>
  );
}
