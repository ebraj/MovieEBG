import { PATH } from "constants/paths";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./HomeRoute";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
