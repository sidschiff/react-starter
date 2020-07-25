import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

/////////////////////////////////////////////////////////////////////
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hardcodedMovies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ],
      adaptableList: [],
      userInputList: [],
      currentUserInput: '',
    }
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  updateList(target, key) {
    let changingList = this.state.adaptableList
    let currentMovieList = this.state.userInputList
    for (let i = 0; i < currentMovieList.length; i++) {
      // Adds matching movies
      if (currentMovieList[i][key].includes(target)) {
        if (!changingList.includes(currentMovieList[i])) {
          changingList.push(currentMovieList[i])
        }
      }
      // Removes non-matching movies
      for (let j = 0; j < changingList.length; j++) {
        if (changingList[j][key].indexOf(target) === -1) {
          changingList.splice(j, 1)
        }
      }
    }
    console.log('Current list: ', changingList)
    this.setState({
      adaptableList: changingList
    })
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  addToList() {
    let currentUserInputList = this.state.userInputList
    currentUserInputList.push({title: this.state.currentUserInput, watched: false})
    this.setState({
      userInputList: currentUserInputList,
      currentUserInput: ''
    })
    // Refresh the list
    this.updateList('', 'title')
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  updateMovieUserInput(input) {
    this.setState({
      currentUserInput: input
    })
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  enterPressed(event) {
    let code = event.keyCode || event.which
    if (code === 'Enter' || code === 13) {
      this.addToList()
    }
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  toggleWatched(movie) {
    movie.watched ? movie.watched = false : movie.watched = true
    console.log('Movie after toggling', movie)
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  componentDidMount() {
    // if something exists in the array at page load, display it
    let changingList = this.state.adaptableList
    let currentMovieList = this.state.userInputList
    for (let i = 0; i < currentMovieList.length; i++) {
      changingList.push(currentMovieList[i])
    }
    this.setState({
      adaptableList: changingList
    })
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>
        <div className='add-movie-bar'>
          <AddMovieBar updateInput={this.updateMovieUserInput.bind(this)} addAMovie={this.addToList.bind(this)} detectEnter={this.enterPressed.bind(this)} currentInputValue={this.state.currentUserInput}/>
        </div>
        <div className='search-bar'>
          <SearchBar handleSearchInputChange={this.updateList.bind(this)} />
        </div>
        <div>
          {this.state.adaptableList.length > 0
            ? <MovieList moviesArray={this.state.adaptableList} toggleWatched={this.toggleWatched.bind(this)} />
            : <span className='movie-list-entry'>No Results. Refine Search.</span>
          }
        </div>
      </div>
    );
  }
  ///////////////////////////////////////////////////////////////////
}

export default App;