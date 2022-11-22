import { Footer, Navbar } from "components";
import React from "react";

const NavbarFooterIncluded = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full min-h-[100vh]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default NavbarFooterIncluded;
