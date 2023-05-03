import "./App.css";
import RoutesComponent from "./Routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const pages = {
    home: "/",
    movies: "/movies",
  };
  return (
    <div className="App">
      <Navigation pagesDict={pages} />
      <RoutesComponent />
    </div>
  );
}

export default App;
