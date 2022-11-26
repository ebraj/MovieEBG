import { MaxWidthLayout, TopSection, OtherSection } from "layouts";
import React, { useState } from "react";
import { BsStarFill, BsTypeH1 } from "react-icons/bs";
import { extractImgPoster } from "utils/extractImg";
import Select from "react-select";

import ReactPaginate from "react-paginate";

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
    backgroundColor: "#1f2937",
    minWidth: "180px",
    border: 0,
    boxShadow: "none",
    "&:hover": {},
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
    backgroundColor: 0,
    "&:hover": {
      backgroundColor: "#22c55e",
      color: "#151515",
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#1f2937",
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
  }),
};

const FlexibleMovieContainer = ({
  sectionTitle,
  moviesList = [],
  total_pages,
  total_results,
  handleCategoryChange,
  handleDayWeekChange,
  handlePageChange,
}) => {
  const [page, setPage] = useState(0);
  const moviesPerPage = 20;
  const numberOfRecordsVisited = page * moviesPerPage;
  const totalPagesCalculated = Math.ceil(total_results / moviesPerPage);
  const selectCategoryOptions = [
    { value: "movie", label: "Movie" },
    { value: "tv", label: "TV" },
  ];
  const selectDayWeekOptions = [
    {
      value: "day",
      label: "Day",
    },
    {
      value: "week",
      label: "Week",
    },
  ];
  return (
    <>
      <MaxWidthLayout>
        <OtherSection>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-5 md:justify-between">
            {sectionTitle && (
              <h2 className="text-3xl uppercase font-AtypDisplayBold">
                {sectionTitle}
              </h2>
            )}
            <div className="flex space-x-2 justify-center">
              <Select
                className="flex-1"
                placeholder="Select Category"
                options={selectCategoryOptions}
                defaultValue={selectCategoryOptions[0]}
                onChange={(singleValue) => {
                  handleCategoryChange(singleValue.value);
                }}
                styles={selectStyles}
              />
              <Select
                className="flex-1"
                placeholder="Select Day/Week"
                options={selectDayWeekOptions}
                defaultValue={selectDayWeekOptions[0]}
                onChange={(singleValue) => {
                  handleDayWeekChange(singleValue.value);
                }}
                styles={selectStyles}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {moviesList
              .slice(
                numberOfRecordsVisited,
                numberOfRecordsVisited + moviesPerPage
              )
              ?.map((singlePopularMovie) => {
                return (
                  <div key={singlePopularMovie.id} className="space-y-5">
                    <div className="relative rounded-md overflow-hidden hover:scale-105 md:hover:scale-110 transition-all">
                      <img
                        src={extractImgPoster(singlePopularMovie.poster_path)}
                        className="rounded-md shadow-lg"
                        alt={singlePopularMovie.title}
                      />
                      <p className="flex space-x-2 items-center absolute top-0 right-0 bg-red-500 px-1">
                        <span className="text-xl text-white-500">
                          <BsStarFill />
                        </span>
                        <span className="pt-1">
                          {singlePopularMovie.vote_average}
                        </span>
                      </p>
                    </div>
                    <div className="space-y-2">
                      {singlePopularMovie.title ? (
                        <h3>{singlePopularMovie.title}</h3>
                      ) : (
                        <h3>{singlePopularMovie.name}</h3>
                      )}
                      <p className="text-gray-500">
                        {singlePopularMovie.release_date}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
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
          </div>
        </OtherSection>
      </MaxWidthLayout>
    </>
  );
};

export default FlexibleMovieContainer;
