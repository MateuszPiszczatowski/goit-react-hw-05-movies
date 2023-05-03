import "./App.css";
import RoutesComponent from "./Routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const pages = {
    home: "/",
    movies: "/movies",
  };
  return (
    <>
      <Navigation pagesDict={pages} />
      <RoutesComponent />;
    </>
  );
}

export default App;
