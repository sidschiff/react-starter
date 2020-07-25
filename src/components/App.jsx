import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
// import MovieListEntry from './MovieListEntry.jsx';

// var hardcodedList = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hardcodedMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      adaptableList: [],
      userInputList: []
    }
  }

  searchList(target, key) {
    // console.log('Looking for a match')
    let changingList = this.state.adaptableList
    let hardcodedList = this.state.hardcodedMovies
    for (let i = 0; i < hardcodedList.length; i++) {
      if (hardcodedList[i][key].includes(target)) {
        if (!changingList.includes(hardcodedList[i][key])) {
          changingList.push(hardcodedList[i][key])
        }
      }
      for (let j = 0; j < changingList.length; j++) {
        if (changingList[j].indexOf(target) === -1) {
          changingList.splice(j, 1)
        }
      }
    }
    // console.log('Here is what has been found: ', this.state.adaptableList)
    this.setState({
      adaptableList: changingList
    })
  }

  componentDidMount() {
    let changingList = this.state.adaptableList
    let hardcodedList = this.state.hardcodedMovies
    for (let i = 0; i < hardcodedList.length; i++) {
      changingList.push(hardcodedList[i]['title'])
    }
    this.setState({
      adaptableList: changingList
    })
  }

  render() {
    // console.log('adaptable list length', this.state.adaptableList.length)

    return (
    <div>
      <div className='search-bar'>
        <SearchBar handleSearchInputChange={this.searchList.bind(this)}/>
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
}


export default App;
