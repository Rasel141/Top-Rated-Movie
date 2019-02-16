import React, { Component } from 'react'
import './MovieCard.css'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'

class MovieCard extends Component {
  render () {
    const { movie } = this.props

    return (
      <Card className='movie-card'>
        <CardActionArea>
          <CardMedia
            className='movie-image'
            image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {movie.title}
            </Typography>
            <Typography component='p'>{movie.overview}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default MovieCard
