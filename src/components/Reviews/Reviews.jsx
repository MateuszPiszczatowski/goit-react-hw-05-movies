import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getMovieReviewsById } from "../../utils/ApiHandler";
import css from "./Reviews.module.css";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [state, setState] = useState({ reviews: undefined, message: "Loading..." });
  const { movieId } = useParams();
  const reviews = state.reviews;

  useEffect(() => {
    const loadReviews = getMovieReviewsById(movieId);
    if (loadReviews) {
      loadReviews.then((reviews) => {
        if (reviews.length > 0) {
          setState({
            reviews: reviews,
            message: "Reviews should be visible, that message shoudln't!",
          });
        } else {
          setState({ reviews: undefined, message: "No reviews to show yet!" });
        }
      });
    } else {
      setState({ reviews: undefined, message: "Unable to load reviews. Try again later." });
    }
  }, [movieId]);

  if (reviews) {
    return (
      <ul className={css.Reviews}>
        {reviews.map((review) => {
          return (
            <li key={nanoid()} className={css.Review}>
              <h4>Author: {review.author}</h4>{" "}
              <p dangerouslySetInnerHTML={{ __html: review.content }} />
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>{state.message}</p>;
};

export default Reviews;
