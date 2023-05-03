import { getTrending } from "../../utils/ApiHandler";
import MoviesList from "../MoviesList/MoviesList";
import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.Home}>
      <h2>Trending today</h2>
      <MoviesList moviesData={getTrending()} />
    </section>
  );
};
export default Home;
