import axios from "axios";

const tmdbUrl = "https://api.themoviedb.org/3";
const tmdbKey = process.env.REACT_APP_TMDB_KEY;

const axiosClient = axios.create({ baseURL: tmdbUrl });

/**
 * Getting the popular movies...
 */
export const getPopularMovies = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/popular",
      params: {
        api_key: tmdbKey,
        language: "en-US",
        page: 1,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the top rated movies...
 */
export const getTopRatedMovies = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/top_rated",
      params: {
        api_key: tmdbKey,
        language: "en-US",
        page: 1,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the latest movies...
 */
export const getUpcomingMovies = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/upcoming",
      params: {
        api_key: tmdbKey,
        language: "en-US",
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the Trending movies...
 */
export const getTrendingMovies = async (
  category = "movie",
  dayWeek = "day",
  page = 1
) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/trending/${category}/${dayWeek}`,
      params: {
        api_key: tmdbKey,
        page: `${page}`,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the Discover movies...
 */
export const getDiscoverMovies = async (sortBy, selectedPage, singleGenre) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/discover/movie/",
      params: {
        api_key: tmdbKey,
        sort_by: sortBy || "popularity.desc",
        page: selectedPage,
        with_genres: singleGenre || "28",
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the Genres list...
 */
export const getMovieGenres = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/genre/movie/list",
      params: {
        api_key: tmdbKey,
        language: "en-US",
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
