import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPagesCalculated, handlePageChange }) => {
  return (
    <>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={totalPagesCalculated}
        onPageChange={({ selected }) => {
          handlePageChange(selected + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        containerClassName={"navigationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"navigationActive"}
      />
    </>
  );
};

export default Pagination;
