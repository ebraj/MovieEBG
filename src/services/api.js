import axios from "axios";

const tmdbUrl = "https://api.themoviedb.org/3";
const tmdbKey = process.env.REACT_APP_TMDB_KEY;

const axiosClient = axios.create({ baseURL: tmdbUrl });

/**
 * Getting the popular movies...
 */
export const getPopularMovies = async (selectedPage = 1) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/popular",
      params: {
        api_key: tmdbKey,
        language: "en-US",
        page: selectedPage,
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
export const getTopRatedMovies = async (selectedPage = 1) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/top_rated",
      params: {
        api_key: tmdbKey,
        language: "en-US",
        page: selectedPage,
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
export const getUpcomingMovies = async (selectedPage = 1) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/movie/upcoming",
      params: {
        api_key: tmdbKey,
        language: "en-US",
        page: selectedPage,
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
export const getDiscoverMovies = async (
  sortBy,
  selectedPage,
  singleGenre = 28
) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/discover/movie",
      params: {
        api_key: tmdbKey,
        sort_by: sortBy || "popularity.desc",
        page: selectedPage,
        with_genres: singleGenre,
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
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Getting the People list...
 */
export const getPeople = async (selectedPage) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/person/popular",
      params: {
        api_key: tmdbKey,
        page: selectedPage,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

/**
 * Getting the single movie data...
 */
export const getSingleMovie = async (movieId) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/movie/${movieId}`,
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
 * Getting the single movie credits...
 */
export const getSingleMovieCredits = async (movieId) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/movie/${movieId}/credits`,
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
 * Getting the similar movies...
 */
export const getSimilarMovies = async (movieId) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/movie/${movieId}/similar`,
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
 * Getting the movies on the basis of genres...
 */
export const getMoviesByGenres = async (genreId, selectedPage = 1) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/discover/movie/`,
      params: {
        api_key: tmdbKey,
        language: "en-US",
        with_genres: genreId,
        page: selectedPage,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
/**
 * Search movie by title...
 */
export const getSearchedMovie = async (movieTitle, selectedPage = 1) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/search/movie`,
      params: {
        query: movieTitle,
        api_key: tmdbKey,
        language: "en-US",
        page: selectedPage,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

getSearchedMovie();
