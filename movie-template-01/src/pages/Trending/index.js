import React, { useEffect, useState } from "react";
import {
  MaxWidthLayout,
  FlexibleMovieContainer,
  NavbarFooterIncluded,
} from "layouts";
import { TopSection } from "layouts";
import { getTrendingMovies } from "services/api";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [category, setCategory] = useState("movie");
  const [dayWeek, setDayWeek] = useState("day");
  const [page, setPage] = useState(1);

  const handleCategoryChange = (providedCategory) => {
    setCategory(providedCategory);
  };
  const handleDayWeekChange = (providedDayWeek) => {
    setDayWeek(providedDayWeek);
  };
  const handlePageChange = (providedPage) => {
    setPage(providedPage);
  };

  useEffect(() => {
    (async function () {
      const {
        results: trendingMoviesResults,
        total_pages,
        total_results,
      } = await getTrendingMovies(category, dayWeek, page);
      trendingMoviesResults &&
        setTrendingMovies({
          trendingMoviesResults,
          total_pages,
          total_results,
        });
    })();
  }, [category, dayWeek, page]);

  return (
    <NavbarFooterIncluded>
      <TopSection>
        <MaxWidthLayout>
          <FlexibleMovieContainer
            moviesList={trendingMovies?.trendingMoviesResults}
            total_pages={trendingMovies?.total_pages}
            total_results={trendingMovies?.total_results}
            handleCategoryChange={handleCategoryChange}
            handleDayWeekChange={handleDayWeekChange}
            handlePageChange={handlePageChange}
            sectionTitle="Trending Movies"
          />
        </MaxWidthLayout>
      </TopSection>
    </NavbarFooterIncluded>
  );
};

export default Trending;
