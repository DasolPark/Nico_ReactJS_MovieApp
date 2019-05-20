import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];
const movieImages = [
  "https://neo1210.files.wordpress.com/2010/09/matrix_movie1.jpg",
  "https://www.avcesar.com/source/software/tmdb/1431/couv_full-metal-jacket.jpg",
  "http://fims.kofic.or.kr/upload/up_img/cleansing/50/mov_20030350_16.jpg",
  "https://coffeeandgeeks.files.wordpress.com/2015/01/star-wars-the-force-awakens-fan-poster-inspired-by-drew-struzan.jpeg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
