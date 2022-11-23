import axios from "axios";

const tmdbUrl = "https://api.themoviedb.org/3/";
const tmdbKey = process.env.REACT_APP_TMDB_KEY;

const axiosClient = axios.create({ baseURL: tmdbUrl });

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
