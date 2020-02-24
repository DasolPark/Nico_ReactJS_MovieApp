import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({ title, poster, overview }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Overview">
          <LinesEllipsis
            text={overview}
            maxLine="6"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />{' '}
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  const imgSrc = `https://image.tmdb.org/t/p/w500${poster}`;
  return <img src={imgSrc} alt={alt} title={alt} className="Movie__Poster" />;
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  overview: propTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};

export default Movie;
