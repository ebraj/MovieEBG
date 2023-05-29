import React, { useEffect, useState } from "react";

/**
 * Components and layouts...
 */
import { MaxWidthLayout, NavbarFooterIncluded, TopSection } from "layouts";
import { SelectComponent, Pagination, MovieCard } from "components";
import { getDiscoverMovies, getMovieGenres } from "services/api";

const Discover = () => {
  const [discoverMovies, setDiscoverMovies] = useState();
  const [singleGenre, setSingleGenre] = useState();
  const [genres, setGenres] = useState();
  const [sortBy, setSortBy] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  /**
   * For pagnination...
   */
  const [page, setPage] = useState(0);
  const moviesPerPage = 20;
  const numberOfRecordsVisited = page * moviesPerPage;
  const totalPagesCalculated = Math.ceil(
    discoverMovies?.total_results / moviesPerPage
  );

  /**
   * For select options
   */
  const selectSortOptions = [
    { value: "popularity.desc", label: "Popularity Desc" },
    { value: "popularity.asc", label: "Popularity Asc" },
    { value: "original_title.asc", label: "Title(A-Z)" },
    { value: "original_title.desc", label: "Title(Z-A)" },
    { value: "release_date.asc", label: "Release Date Asc" },
    { value: "release_date.desc", label: "Release Date Desc" },
  ];
  /**
   * Required functions ...
   */
  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };
  const handleSortByChange = (providedOpt) => {
    setSortBy(providedOpt);
  };
  const handleGenreChange = (providedOpt) => {
    setSingleGenre(providedOpt);
  };

  useEffect(() => {
    (async function () {
      const {
        results: discoverMoviesResults,
        total_pages,
        total_results,
      } = await getDiscoverMovies(sortBy, selectedPage, singleGenre);
      discoverMoviesResults &&
        setDiscoverMovies({
          discoverMoviesResults,
          total_pages,
          total_results,
        });
    })();
  }, [sortBy, selectedPage, singleGenre]);
  console.log(singleGenre);

  useEffect(() => {
    (async function () {
      const { genres: genresResults } = await getMovieGenres();
      genresResults && setGenres(genresResults);
    })();
  }, []);

  return (
    <NavbarFooterIncluded>
      <MaxWidthLayout>
        <TopSection>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:space-x-5 md:justify-between">
            <h2 className="text-3xl uppercase font-AtypDisplayBold">
              Discover Movies
            </h2>
            <div className="flex justify-center space-x-2">
              {genres && (
                <SelectComponent
                  selectOptions={genres.map((genre) => {
                    return {
                      value: genre.id,
                      label: genre.name,
                    };
                  })}
                  handleSelectChange={handleGenreChange}
                  placeholder={"Select Genre"}
                />
              )}
              <SelectComponent
                selectOptions={selectSortOptions}
                handleSelectChange={handleSortByChange}
                placeholder={"Select Sort Opt"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 md:gap-10">
            {discoverMovies?.discoverMoviesResults
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

export default Discover;
