import React from 'react';
// import App from './App.jsx';
// import MovieList from './MovieList.jsx';

var MovieListEntry = ({title, watched, toggleWatched, currentMovie}) => (
  <div className='movie-list-entry bubble'>
    {title}
    {/* {watched
      ? <span onClick={toggleWatched(currentMovie)} className='checkButton watched'>Watched</span>
      : <span onClick={toggleWatched(currentMovie)} className='checkButton'>Not Watched</span>
    } */}
  </div>
)

export default MovieListEntry;