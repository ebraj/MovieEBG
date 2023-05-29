import { Footer, Navbar } from "components";
import React from "react";

const NavbarFooterIncluded = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full min-h-[100vh] relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default NavbarFooterIncluded;
