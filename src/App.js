import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMound()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "https://neo1210.files.wordpress.com/2010/09/matrix_movie1.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:
              "https://www.avcesar.com/source/software/tmdb/1431/couv_full-metal-jacket.jpg"
          },
          {
            title: "Old boy",
            poster:
              "http://fims.kofic.or.kr/upload/up_img/cleansing/50/mov_20030350_16.jpg"
          },
          {
            title: "Star Wars",
            poster:
              "https://coffeeandgeeks.files.wordpress.com/2015/01/star-wars-the-force-awakens-fan-poster-inspired-by-drew-struzan.jpeg"
          },
          {
            title: "Trainspotting",
            poster:
              "http://eccefilm.max.gazzetta.it/files/2013/03/trainspotting.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
