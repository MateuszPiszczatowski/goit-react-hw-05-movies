const API_KEY_LINK_PART = "?api_key=257d3002876fa504627cffb9f7223956";
const LINK_BASE = "https://api.themoviedb.org/3/";

const getRequest = async (link) => {
  try {
    const fetchResult = await fetch(link);
    if (fetchResult.ok) {
      const result = await fetchResult.json();
      return result;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const getTrending = async () => {
  const trendingMovies = await getRequest(`${LINK_BASE}trending/movie/day${API_KEY_LINK_PART}`);
  return trendingMovies.results.filter((result) => !result.adult);
};

export const getByTitle = async (title) => {
  const moviesByTitle = await getRequest(
    `${LINK_BASE}/search/movie${API_KEY_LINK_PART}&query=${title}&include_adult=false`
  );
  return moviesByTitle.results;
};

export const getMovieDataById = async (id) => {
  const movieData = await getRequest(`${LINK_BASE}movie/${id}${API_KEY_LINK_PART}`);
  return movieData;
};

export const getMovieReviewsById = async (id) => {
  const movieReviews = await getRequest(`${LINK_BASE}movie/${id}/reviews${API_KEY_LINK_PART}`);
  return movieReviews.results;
};

export const getMovieCastById = async (id) => {
  const movieCast = await getRequest(`${LINK_BASE}movie/${id}/credits${API_KEY_LINK_PART}`);
  return movieCast.cast;
};
