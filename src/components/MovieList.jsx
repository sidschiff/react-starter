import React from 'react';
// import App from './App.jsx';
import MovieListEntry from './MovieListEntry.jsx';


var MovieList = ({moviesArray, toggleWatched}) => (
  <div className='movie-list container'>

    {moviesArray.map((movie) =>
      <MovieListEntry
        title={movie.title}
        watched={movie.watched}
        toggleWatched={toggleWatched}
        currentMovie={movie}
      />
    )}
  </div>
);

export default MovieList;