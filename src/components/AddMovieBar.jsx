import React from 'react';

var AddMovieBar = ({updateInput, addAMovie, detectEnter, currentInputValue}) => (
  <div className='add-movie-bar form-inline'>
    <input
      type='text'
      className='form-insert'
      placeholder='Add a Movie'
      onChange={(event) => updateInput(event.target.value)}
      value={currentInputValue}
      onKeyPress={detectEnter}
    />
    <button onClick={addAMovie}>Add</button>
  </div>
)

export default AddMovieBar;