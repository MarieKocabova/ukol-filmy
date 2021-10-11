import React from "react";
import "./style.css";
import Actor from "../actor";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <div className="movie-box">
        <div className="rating">
          <b>{rating}</b>
          <small>/10</small>
        </div>
        <img src={poster} alt={title} className="poster" />
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
            <Actor />

            <div className="actor">
              <div className="actor-name">
                <b>J. Hardcode</b>
              </div>
              <div className="actor-as">as Vinc Hard</div>
            </div>

            <div className="actor">
              <div className="actor-name">
                <b>J. Hardcode</b>
              </div>
              <div className="actor-as">as Vinc Hard</div>
            </div>

            <div className="actor">
              <div className="actor-name">
                <b>J. Hardcode</b>
              </div>
              <div className="actor-as">as Vinc Hard</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="movie-box">
        <div className="rating">
          <b>8,9</b>
          <small>/10</small>
        </div>
        <img src="../assets/pulp-fiction.jpg" alt="pulp-fiction poster" className="poster" />
        <div className="info">
          <h2 className="title">Pulp Fiction</h2>
          <div className="meta">
            <p className="year">
              <b>Rok vydání:</b> <span>1994</span>
            </p>
            <p className="genre">
              <b>Žárn:</b> <span>crime, drama</span>
            </p>
            <p className="director">
              <b>Režie:</b> <span>Quentin Tarantino</span>
            </p>
          </div>
          <h3 className="actor-title">V hlavních rolích:</h3>
          <div className="actors-innersection">
            <div className="actor">
              <div className="actor-name">
                <b>John Travolta</b>
              </div>
              <div className="actor-as">
                as <b>Vincent Vega</b>
              </div>
            </div>

            <div className="actor">
              <div className="actor-name">
                <b>John Travolta</b>
              </div>
              <div className="actor-as">as Vincent Vega</div>
            </div>

            <div className="actor">
              <div className="actor-name">
                <b>John Travolta</b>
              </div>
              <div className="actor-as">as Vincent Vega</div>
            </div>

            <div className="actor">
              <div className="actor-name">
                <b>John Travolta</b>
              </div>
              <div className="actor-as">as Vincent Vega</div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
};

export default Movie;
