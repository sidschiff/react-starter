import React from 'react';

var SearchBar = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline" >
    <input
    type='text'
    className='form-insert'
    placeholder='Search Movies'
    onChange={(event) => handleSearchInputChange(event.target.value, 'title')}
    />
  </div>
);

export default SearchBar;