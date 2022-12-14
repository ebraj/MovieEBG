import { PATH } from "constants/paths";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "routes/homeRoute";
import TrendingRoute from "routes/trendingRoute";
import DiscoverRoute from "routes/discoverRoute";
import PeopleRoute from "routes/peopleRoute";
import UpcomingRoute from "routes/upcomingRoute";
import PopularRoute from "routes/popularRoute";
import TopRatedRoute from "routes/topRatedRoute";
import ShowMovieRoute from "routes/showMovieRoute";
import SingleMovieRoute from "routes/singleMovieRoute";
import ShowGenreRoute from "routes/showGenreRoute";
import SingleGenreRoute from "routes/singleGenreRoute";
import GenresRoute from "routes/genresRoute";
import SearchRoute from "routes/searchRoute";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<HomeRoute />} />
        <Route path={PATH.TRENDING} element={<TrendingRoute />} />
        <Route path={PATH.DISCOVER} element={<DiscoverRoute />} />
        <Route path={PATH.PEOPLE} element={<PeopleRoute />} />
        <Route path={PATH.UPCOMING} element={<UpcomingRoute />} />
        <Route path={PATH.POPULAR} element={<PopularRoute />} />
        <Route path={PATH.TOPRATED} element={<TopRatedRoute />} />
        <Route path={PATH.GENRES} element={<GenresRoute />} />
        <Route path={PATH.SHOWMOVIE} element={<ShowMovieRoute />}>
          <Route path=":movieId" element={<SingleMovieRoute />} />
        </Route>
        <Route path={PATH.GENRE} element={<ShowGenreRoute />}>
          <Route path=":genreId" element={<SingleGenreRoute />} />
        </Route>
        <Route path={PATH.SEARCH} element={<SearchRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
