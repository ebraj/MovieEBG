import { PATH } from "constants/paths";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "routes/HomeRoute";
import TrendingRoute from "routes/TrendingRoute";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<HomeRoute />} />
        <Route path={PATH.TRENDING} element={<TrendingRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
