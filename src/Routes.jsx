import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomeRedirect from "./components/HomeRedirect/HomeRedirect";

const RoutesComponent = () => {
  const Cast = lazy(() => import("./components/Cast/Cast"));
  const Home = lazy(() => import("./components/Home/Home"));
  const Movies = lazy(() => import("./components/Movies/Movies"));
  const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"));
  const Reviews = lazy(() => import("./components/Reviews/Reviews"));
  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<HomeRedirect />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
