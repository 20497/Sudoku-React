import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { globalStyles } from "./globalStyle";
import { appRoutes } from "./appRoutes";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";

export default function App() {
  React.useEffect(() => {
    // Load Global Style
    globalStyles();
  }, []);

  return (
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
  );
}
