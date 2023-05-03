import { useSearchParams } from "react-router-dom";
import { getByTitle } from "../../utils/ApiHandler";
import MoviesList from "../MoviesList/MoviesList";
import css from "./Movies.module.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const querry = searchParams.get("querry");
  const onSearchSubmit = (evt) => {
    evt.preventDefault();
    setSearchParams({ querry: evt.target.elements["querryInput"].value });
  };

  return (
    <section className={css.Movies}>
      <form onSubmit={onSearchSubmit} className={css.MoviesForm}>
        <input type="text" name="querryInput" defaultValue={querry}></input>
        <input type="submit" name="submitInput" value="Search"></input>
      </form>
      {querry && <MoviesList moviesData={getByTitle(querry)} />}
    </section>
  );
};
export default Movies;
