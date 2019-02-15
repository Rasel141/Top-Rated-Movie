import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './App.css'
import apiKey from './apiKey'

import MovieCard from './components/MovieCard'

class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount () {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    )
    const json = await response.json()
    this.setState({ movies: json.results })
  }

  render () {
    const { movies } = this.state
    console.log(movies)
    return (
      <div className='App'>
        <AppBar position='fixed' >
          <Toolbar>
            <Typography variant='h6' color='inherit'>
            Top Rated Movie
            </Typography>
          </Toolbar>
        </AppBar>
      
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
