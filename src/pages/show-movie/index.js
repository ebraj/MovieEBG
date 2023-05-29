import React, { useEffect, useState } from "react";
/**
 * Components and layouts...
 */
import { Outlet } from "react-router-dom";

const ShowMovie = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ShowMovie;
