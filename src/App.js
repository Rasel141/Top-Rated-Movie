import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './App.css'
import apiKey from './apiKey'

import MovieCard from './components/MovieCard'
import MovieDialog from './components/MovieDialog'

class App extends Component {
  state = {
    movies: [],
    selectedMovie: null
  }

  selectMovie = movie => this.setState({selectedMovie: movie})
  clearMovie = () => this.setState({selectedMovie: null})


  async componentDidMount () {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    )
    const json = await response.json()
    this.setState({ movies: json.results })
  }

  render () {
    const { movies, selectedMovie } = this.state
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
            <MovieCard key={movie.id} movie={movie} selectMovie={this.selectMovie} />
          ))}
        </div>

        <MovieDialog movie = {selectedMovie} handleClose = {this.clearMovie} />
      </div>
    )
  }
}

export default App
