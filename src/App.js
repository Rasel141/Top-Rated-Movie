import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCard'

const starWars = {id: 1, title: 'star war'}
class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard movie = { starWars } />
      </div>
    );
  }
}

export default App;
