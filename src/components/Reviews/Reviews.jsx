import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getMovieReviewsById } from "../../utils/ApiHandler";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const reviews = getMovieReviewsById(movieId);
  if (reviews) {
    return (
      <ul className={css.Reviews}>
        {reviews.map((review) => {
          return (
            <li key={nanoid()} className={css.Review}>
              <h4>Author: {review.author}</h4> <p>"{review.review}"</p>
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>No reviews to show yet!</p>;
};

export default Reviews;
