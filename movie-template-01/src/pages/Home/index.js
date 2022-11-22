import {
  NavbarFooterIncluded,
  MaxWidthLayout,
  TopSection,
  OtherSection,
} from "layouts";
import React from "react";

const Homepage = () => {
  return (
    <>
      <NavbarFooterIncluded>
        <MaxWidthLayout>
          <TopSection>
            <h1>UntitledProject...</h1>
          </TopSection>
        </MaxWidthLayout>
      </NavbarFooterIncluded>
    </>
  );
};

export default Homepage;
