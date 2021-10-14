import React from "react";
import "./style.css";

import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return <Movie title={movie.title} year={movie.year} poster={movie.poster} director={movie.director} genre={movie.genre} rating={movie.rating} cast={movie.cast} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
