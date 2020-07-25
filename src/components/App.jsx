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
      hasBeenWatched: false
    }
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  updateList(target, key) {
    // console.log('Looking for a match')
    let changingList = this.state.adaptableList
    let currentMovieList = this.state.userInputList
    for (let i = 0; i < currentMovieList.length; i++) {
      if (currentMovieList[i][key].includes(target)) {
        if (!changingList.includes(currentMovieList[i])) {
          // console.log('Here is what is getting pushed to changingList', currentMovieList[i])
          changingList.push(currentMovieList[i])
        }
      }
      for (let j = 0; j < changingList.length; j++) {
        // console.log('Current movie object: ', changingList[j])
        // console.log('Current movie title: ', changingList[j][key])
        if (changingList[j][key].indexOf(target) === -1) {
          // console.log('Here is what we are removing', changingList[j])
          changingList.splice(j, 1)
        }
      }
    }
    changingList.sort()
    // console.log('Here is what has been found: ', this.state.adaptableList)
    this.setState({
      adaptableList: changingList
    })
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  addToList() {
    let currentUserInputList = this.state.userInputList
    currentUserInputList.push({title: this.state.currentUserInput})

    this.setState({
      userInputList: currentUserInputList,
      currentUserInput: ''
    })
    // Refresh the list
    this.updateList('', 'title')
    // console.log('Current userInputList', this.state.userInputList)
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
    // console.log('Triggered enterPressed')
    let code = event.keyCode || event.which
    // console.log('current code is', code)
    if (code === 'Enter' || code === 13) {
      this.addToList()
    }
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  toggleWatched() {
    this.setState({
      hasBeenWatched: !hasBeenWatched
    })
  }
  ///////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  componentDidMount() {
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
    // console.log('adaptable list length', this.state.adaptableList.length)
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
            ? <MovieList moviesArray={this.state.adaptableList} />
            : <span className='movie-list-entry'>No Results. Refine Search.</span>
          }
        </div>
      </div>
    );
  }
  ///////////////////////////////////////////////////////////////////
}

export default App;