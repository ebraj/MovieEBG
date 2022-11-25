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
export const getTrendingMovies = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/trending/movie/week",
      params: {
        api_key: tmdbKey,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
