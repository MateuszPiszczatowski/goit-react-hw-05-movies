import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieDataById } from "../../utils/ApiHandler";
import css from "./MovieDetails.module.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import onExternalImageError from "../../utils/ImageHandler";

const POSTER_LINK_STARTER = "https://www.themoviedb.org//t/p/w600_and_h900_bestv2/";

const MovieDetails = () => {
  const [state, setState] = useState({ movieData: undefined, message: "", isLoading: true });

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const movieData = state.movieData;

  useEffect(() => {
    const newState = { movieData: undefined, message: "", isLoading: false };
    const getMovieData = getMovieDataById(movieId);
    getMovieData.then((movieData) => {
      if (movieData) {
        newState.movieData = movieData;
      } else {
        newState.message = "Couldn't download data, try again later.";
      }
      setState(newState);
    });
  }, [movieId]);

  const onBack = () => {
    const from = location.state ? location.state.from : "/";
    navigate(from);
  };

  return state.isLoading ? (
    <Loader />
  ) : movieData ? (
    <article className={css.MovieDetails}>
      <button type="button" className={css.BackButton} onClick={onBack}>
        ☚ Go back
      </button>
      <section className={css.InfoSection}>
        <img
          src={POSTER_LINK_STARTER + movieData.poster_path}
          alt={`Poster of ${movieData.title}`}
          className={css.Poster}
          onError={onExternalImageError}
        />
        <div className={css.Details}>
          <h2>{`${movieData.title} (${movieData.release_date})`}</h2>
          <p>User score: {movieData.vote_average * 100}%</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul className={css.Genres}>
            {movieData.genres.map((genre) => (
              <li key={nanoid()}>{genre.name} </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className={css.AdditionalInfoNav}>
          <div className={css.LeftPadder}>
            <p>Additional information</p>
            <ul className={css.AdditionalInfoNavList}>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </section>
    </article>
  ) : (
    <div className={css.NoDataMessagePositioner}>
      <h2 className={css.NoDataMessage}>{state.message}</h2>
    </div>
  );
};
export default MovieDetails;
