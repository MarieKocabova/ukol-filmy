import React from "react";
import movies from "../../movies";

import Movie from "../Movie";

const MovieList = () => (
  <>
    {movies.map((movie) => {
      return <Movie title={movie.title} year={movie.year} poster={`../assets/${movie.poster}`} director={movie.director} genre={movie.genre} rating={movie.rating} key={movie.id} />;
    })}
  </>
);

export default MovieList;
