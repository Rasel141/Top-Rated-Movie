import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const {movie} = this.props

    return (
      <div>
{movie.title}
        
      </div>
    )
  }
}

export default MovieCard
