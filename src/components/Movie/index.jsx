import React from "react";
import "./style.css";

const Movie = () => {
  return (
    <div className="movie-section">
      <div className="movie-box">
        <div className="rating">8,9%</div>
        <img src="../assets/pulp-fiction.jpg" alt="pulp-fiction poster" className="poster" />
        <div className="info">
          <h2 className="title">Pulp Fiction</h2>
          <div className="meta">
            <p className="year">
              <b>Rok vydání:</b> 1994
            </p>
            <p className="genre">
              <b>Žárn:</b> crime, drama
            </p>
            <p className="director">
              <b>Režie:</b> Quentin Tarantino
            </p>
          </div>
          <h3 className="cast-title">V hlavních rolích</h3>
        </div>
        <div className="cast-innersection"></div>
        <p className="cast-name">John Travolta</p>
        <p className="cast-as">as Vincent Vega</p>
      </div>

      <div className="movie-box">
        <div className="rating">8,9%</div>
        <img src="../assets/pulp-fiction.jpg" alt="pulp-fiction poster" className="poster" />
        <div className="info">
          <h2 className="title">Pulp Fiction</h2>
          <div className="meta">
            <p className="year">
              <b>Rok vydání:</b> 1994
            </p>
            <p className="genre">
              <b>Žárn:</b> crime, drama
            </p>
            <p className="director">
              <b>Režie:</b> Quentin Tarantino
            </p>
          </div>
          <h3 className="cast-title">V hlavních rolích</h3>
        </div>
        <div className="cast-innersection"></div>
        <p className="cast-name">John Travolta</p>
        <p className="cast-as">as Vincent Vega</p>
      </div>

      <div className="movie-box">
        <div className="rating">8,9%</div>
        <img src="../assets/pulp-fiction.jpg" alt="pulp-fiction poster" className="poster" />
        <div className="info">
          <h2 className="title">Pulp Fiction</h2>
          <div className="meta">
            <p className="year">
              <b>Rok vydání:</b> 1994
            </p>
            <p className="genre">
              <b>Žárn:</b> crime, drama
            </p>
            <p className="director">
              <b>Režie:</b> Quentin Tarantino
            </p>
          </div>
          <h3 className="cast-title">V hlavních rolích</h3>
        </div>
        <div className="cast-innersection"></div>
        <p className="cast-name">John Travolta</p>
        <p className="cast-as">as Vincent Vega</p>
      </div>
    </div>
  );
};

export default Movie;
