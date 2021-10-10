import React from "react";
import { render } from "react-dom";
import "./style.css";

import Header from "./components/Header";
import Movie from "./components/Movie";

import movies from "./movies";

const App = () => (
  <>
    <Header />
    {/* <Movie title="Pulp fict" poster="../assets/pulp-fiction.jpg" year="1898" rating="8,3" director="Vincent" genre="crimi" /> */}
    {/* <MovieList /> */}
    <div className="movie-section">
      {movies.map((movie) => {
        return <Movie title={movie.title} year={movie.year} poster="../assets/pulp-fiction.jpg" director={movie.director} genre={movie.genre} rating={movie.rating} />;
      })}
    </div>
  </>
);

render(<App />, document.querySelector("#app"));
