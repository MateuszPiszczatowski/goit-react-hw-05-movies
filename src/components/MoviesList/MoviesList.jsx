import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MoviesList.module.css";
import { useState, useEffect } from "react";

const MoviesList = ({ moviesData }) => {
  const location = useLocation();

  const [state, setState] = useState({ movies: undefined, message: "Loading..." });

  useEffect(() => {
    setState({ movies: undefined, message: "Loading..." });
    const load = async () => {
      const movies = await moviesData;
      if (movies) {
        if (movies.length > 0) {
          setState({ movies: movies, message: "" });
        } else {
          setState({ movies: undefined, message: "No data fulfilling given criteria" });
        }
      } else {
        setState({
          movies: undefined,
          message: "Error while downloading data. Try again later.",
        });
      }
    };
    load();
  }, [moviesData]);

  if (moviesData.length === 0) {
    return <></>;
  }
  return state.movies ? (
    <ul className={css.MoviesList}>
      {state.movies.map((movie) => {
        return (
          <li key={nanoid()}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>{state.message}</p>
  );
};

export default MoviesList;
