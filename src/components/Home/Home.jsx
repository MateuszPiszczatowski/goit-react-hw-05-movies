import { useEffect, useState } from "react";
import { getTrending } from "../../utils/ApiHandler";
import MoviesList from "../MoviesList/MoviesList";
import css from "./Home.module.css";

const Home = () => {
  const [state, setState] = useState({ trending: undefined, message: "Loading..." });
  useEffect(() => {
    const load = async () => {
      const movies = await getTrending();
      if (movies) {
        setState({ trending: movies, message: "" });
      } else {
        setState({
          trending: undefined,
          message: "Error while downloading data. Try again later.",
        });
      }
    };
    load();
  }, []);
  return (
    <section className={css.Home}>
      <h2>Trending today</h2>
      {state.trending ? <MoviesList moviesData={state.trending} /> : <p>{state.message}</p>}
    </section>
  );
};
export default Home;
