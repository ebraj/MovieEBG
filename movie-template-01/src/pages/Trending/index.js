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

  useEffect(() => {
    (async function () {
      const { results: trendingMoviesResults } = await getTrendingMovies();
      trendingMoviesResults && setTrendingMovies(trendingMoviesResults);
    })();
  }, []);

  console.log(trendingMovies);
  return (
    <NavbarFooterIncluded>
      <TopSection>
        <MaxWidthLayout>
          <FlexibleMovieContainer
            moviesList={trendingMovies}
            sectionTitle="Trending Movies"
          />
        </MaxWidthLayout>
      </TopSection>
    </NavbarFooterIncluded>
  );
};

export default Trending;
