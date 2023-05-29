import React from "react";

const MaxWidthLayout = ({ children }) => {
  return (
    <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-8 md:px-12">
      {children}
    </div>
  );
};

export default MaxWidthLayout;
