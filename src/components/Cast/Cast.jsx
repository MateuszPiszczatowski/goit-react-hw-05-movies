import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getMovieCastById } from "../../utils/ApiHandler";
import css from "./Cast.module.css";
import { useEffect, useState } from "react";
import onExternalImageError from "../../utils/ImageHandler";

const IMAGE_LINK_STARTER = "https://www.themoviedb.org//t/p/w600_and_h900_bestv2/";
const Cast = () => {
  const [state, setState] = useState({ cast: undefined, message: "Loading..." });
  const { movieId } = useParams();
  const cast = state.cast;
  useEffect(() => {
    const loadCast = getMovieCastById(movieId);
    if (loadCast) {
      loadCast.then((cast) => {
        if (cast.length > 0) {
          setState({
            cast: cast,
            message: "That message shouldn't be visible, there should be cast!",
          });
        } else {
          setState({ cast: undefined, message: "Oops, API returned empty cast!" });
        }
      });
    } else {
      setState({ cast: undefined, message: "Couldn't load cast. Try again later." });
    }
  }, [movieId]);

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
                <img
                  src={IMAGE_LINK_STARTER + actor.profile_path}
                  alt={actor.name}
                  className={css.Photo}
                  onError={onExternalImageError}
                />
              </figure>
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>{state.message}</p>;
};
export default Cast;
