import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getMovieCastById } from "../../utils/ApiHandler";
import css from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const cast = getMovieCastById(movieId);
  if (cast) {
    return (
      <ul className={css.Cast}>
        {cast.map((actor) => {
          return (
            <li key={nanoid()}>
              <figure>
                <figcaption className={css.Caption}>
                  <h5>{actor.name}</h5>
                  <p>Character: {actor.character}</p>
                </figcaption>
                <img src={actor.photo} alt={actor.name} className={css.Photo} />
              </figure>
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>No cast to show</p>;
};
export default Cast;
