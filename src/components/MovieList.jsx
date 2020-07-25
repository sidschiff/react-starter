import React from 'react';
// import App from './App.jsx';
import MovieListEntry from './MovieListEntry.jsx';


var MovieList = ({moviesArray}) => (
  <div className='movie-list'>

    {moviesArray.map((movie) =>
      <MovieListEntry
        title={movie}
      />

    )}

  </div>
);

export default MovieList;