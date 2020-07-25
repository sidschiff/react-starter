import React from 'react';
// import App from './App.jsx';
import MovieListEntry from './MovieListEntry.jsx';


var MovieList = ({moviesArray}) => (
  <div className='movie-list container'>

    {moviesArray.map((movie) =>
      <MovieListEntry
        title={movie.title}
      />

    )}

  </div>
);

export default MovieList;