import React from "react";
import { render } from "react-dom";
import "./style.css";

import Header from "./components/Header";
import Movie from "./components/Movie";

const App = () => (
  <>
    <Header />
    <Movie />
  </>
);

render(<App />, document.querySelector("#app"));
