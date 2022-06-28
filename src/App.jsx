import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { globalStyles } from "./globalStyle";
import { appRoutes } from "./appRoutes";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";
import GameContextProvider from "./context/GameContextProvider";

export default function App() {
  React.useEffect(() => {
    globalStyles(); // Load Global Style
  }, []);

  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={appRoutes.HOME} element={<HomePage />} />
          <Route path={appRoutes.GAME} element={<GamePage />} />
          <Route path={appRoutes.STATISTICS} element={<StatisticPage />} />
          <Route
            path={appRoutes.NOT_FOUND}
            element={<Navigate to={appRoutes.HOME} replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}
