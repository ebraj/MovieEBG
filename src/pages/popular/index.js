import React, { useEffect, useState } from "react";

/**
 * Components and layouts...
 */
import { MaxWidthLayout, NavbarFooterIncluded, TopSection } from "layouts";
import { Pagination, MovieCard } from "components";
import { getPopularMovies } from "services/api";

const Upcoming = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  /**
   * For pagnination...
   */
  const [page, setPage] = useState(0);
  const moviesPerPage = 20;
  const numberOfRecordsVisited = page * moviesPerPage;
  const totalPagesCalculated = Math.ceil(
    popularMovies?.total_results / moviesPerPage
  );

  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };

  useEffect(() => {
    (async function () {
      const {
        results: popularMoviesResults,
        total_pages,
        total_results,
      } = await getPopularMovies(selectedPage);
      popularMoviesResults &&
        setPopularMovies({
          popularMoviesResults,
          total_pages,
          total_results,
        });
    })();
  }, [selectedPage]);

  return (
    <NavbarFooterIncluded>
      <MaxWidthLayout>
        <TopSection>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-5 md:justify-between">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              Popular Movies
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 md:gap-10">
            {popularMovies?.popularMoviesResults
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

export default Upcoming;
