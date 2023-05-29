import React, { useEffect, useState } from "react";

/**
 * Components and layouts...
 */
import { MaxWidthLayout, NavbarFooterIncluded, TopSection } from "layouts";
import { SelectComponent, Pagination, MovieCard } from "components";
import { getMovieGenres, getTrendingMovies } from "services/api";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [category, setCategory] = useState("movie");
  const [dayWeek, setDayWeek] = useState("day");
  const [selectedPage, setSelectedPage] = useState(1);
  /**
   * For pagnination...
   */
  const [page, setPage] = useState(0);
  const moviesPerPage = 20;
  const numberOfRecordsVisited = page * moviesPerPage;
  const totalPagesCalculated = Math.ceil(
    trendingMovies?.total_results / moviesPerPage
  );

  /**
   * For select options
   */
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

  const handleCategoryChange = (providedCategory) => {
    setCategory(providedCategory);
  };
  const handleDayWeekChange = (providedDayWeek) => {
    setDayWeek(providedDayWeek);
  };
  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };

  useEffect(() => {
    (async function () {
      const {
        results: trendingMoviesResults,
        total_pages,
        total_results,
      } = await getTrendingMovies(category, dayWeek, selectedPage);
      trendingMoviesResults &&
        setTrendingMovies({
          trendingMoviesResults,
          total_pages,
          total_results,
        });
    })();
  }, [category, dayWeek, selectedPage]);

  return (
    <NavbarFooterIncluded>
      <MaxWidthLayout>
        <TopSection>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-5 md:justify-between">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              Trending Movies
            </h2>
            <div className="flex justify-center space-x-2">
              <SelectComponent
                selectOptions={selectCategoryOptions}
                handleSelectChange={handleCategoryChange}
                placeholder={"Select Category"}
              />
              <SelectComponent
                selectOptions={selectDayWeekOptions}
                handleSelectChange={handleDayWeekChange}
                placeholder={"Select Day/Week"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 md:gap-10">
            {trendingMovies?.trendingMoviesResults
              .slice(
                numberOfRecordsVisited,
                numberOfRecordsVisited + moviesPerPage
              )
              ?.map((singlePopularMovie) => {
                return (
                  <MovieCard
                    key={singlePopularMovie.id}
                    singlePopularMovie={singlePopularMovie}
                  />
                );
              })}
          </div>
          <div>
            <Pagination
              totalPagesCalculated={totalPagesCalculated}
              handlePageChange={handlePageChange}
            />
          </div>
        </TopSection>
      </MaxWidthLayout>
    </NavbarFooterIncluded>
  );
};

export default Trending;
