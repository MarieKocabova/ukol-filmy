import React from "react";
import "./style.css";
import Actor from "../actor";

const Movie = ({ rating, poster, title, year, genre, director, cast }) => {
  return (
    <>
      <div className="movie-box">
        <div className="rating">
          <b>{rating}</b>
          <small>/10</small>
        </div>
        <img src={`../assets/${poster}`} alt={title} className="poster" />
        <div className="info">
          <h2 className="title">{title}</h2>
          <div className="meta">
            <p className="year">
              <b>Rok vydání:</b> <span>{year}</span>
            </p>
            <p className="genre">
              <b>Žárn:</b> <span>{genre}</span>
            </p>
            <p className="director">
              <b>Režie:</b> <span>{director}</span>
            </p>
          </div>
          <h3>V hlavních rolích:</h3>
          <div className="actors-innersection">
            {cast.map((actor) => (
              <Actor name={actor.name} as={actor.as} key={actor.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
