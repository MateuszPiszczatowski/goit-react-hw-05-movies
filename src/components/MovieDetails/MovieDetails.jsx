import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieDataById } from "../../utils/ApiHandler";
import css from "./MovieDetails.module.css";
import { nanoid } from "nanoid";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const MovieData = getMovieDataById(movieId);
  console.log(location);
  const onBack = () => {
    const from = location.state ? location.state.from : "/";
    navigate(from);
  };
  return (
    <article className={css.MovieDetails}>
      <button type="button" className={css.BackButton} onClick={onBack}>
        ☚ Go back
      </button>
      <section className={css.InfoSection}>
        <img
          src={MovieData.imageLink}
          alt={`Poster of ${MovieData.title}`}
          className={css.Poster}
        />
        <div className={css.Details}>
          <h2>{`${MovieData.title} (${MovieData.year})`}</h2>
          <p>User score: {MovieData.score}%</p>
          <h3>Overview</h3>
          <p>{MovieData.overview}</p>
          <h3>Genres</h3>
          <ul className={css.Genres}>
            {MovieData.genres.map((genre) => (
              <li key={nanoid()}>{genre} </li>
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
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </section>
    </article>
  );
};
export default MovieDetails;
