import React, { Component } from 'react'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'

import './MovieCard.css'

class MovieCard extends Component {
  selectMovie = () => {
    const { movie, selectMovie } = this.props
    selectMovie(movie)
  }

  render () {
    const { movie } = this.props

    return (
      <Card className='movie-card'>
        <CardActionArea>
          <CardMedia
            className='movie-image'
            image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            title={movie.title}
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {movie.title}
            </Typography>
            <Typography component='p'>{movie.overview}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' onClick={this.selectMovie}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default MovieCard
