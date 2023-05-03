import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MoviesList.module.css";

const MoviesList = ({ moviesData }) => {
  const location = useLocation();
  if (moviesData.length === 0) {
    return <></>;
  }
  return (
    <ul className={css.MoviesList}>
      {moviesData.map((movie) => {
        return (
          <li key={nanoid()}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
