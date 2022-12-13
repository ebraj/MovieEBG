import { PATH } from "constants/paths";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "routes/homeRoute";
import TrendingRoute from "routes/trendingRoute";
import DiscoverRoute from "routes/discoverRoute";
import PeopleRoute from "routes/peopleRoute";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<HomeRoute />} />
        <Route path={PATH.TRENDING} element={<TrendingRoute />} />
        <Route path={PATH.DISCOVER} element={<DiscoverRoute />} />
        <Route path={PATH.PEOPLE} element={<PeopleRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
