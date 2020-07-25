import React from 'react';

var AddMovieBar = ({updateInput, addAMovie}) => (
  <div className='add-movie-bar form-inline'>
    <input
      type='text'
      className='form-insert'
      placeholder='Add a Movie'
      onChange={(event) => updateInput(event.target.value)}
    />
    <button onClick={addAMovie}>Add</button>
  </div>
)

export default AddMovieBar;