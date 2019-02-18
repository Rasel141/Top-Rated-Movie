import React from 'react'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CardMedia
} from '@material-ui/core'

import './MovieDialog.css'

export default class MovieDialog extends React.Component {
  render () {
    const { movie, handleClose } = this.props

    let title

    let content = null

    if (movie) {
      title = <DialogTitle id='form-dialog-title'>{movie.title}</DialogTitle>
      content = (
        <DialogContent>
          <DialogContentText>{movie.overview}</DialogContentText>
          <CardMedia
            className='movie-details-image'
            image={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title={movie.title}
          />
          <TextField
            label='Release date'
            type='date'
            value={movie.release_date}
            fullWidth
            disabled
          />
          <TextField
            label='Popularity'
            value={movie.popularity}
            fullWidth
            disabled
          />
          <TextField
            label='Vote Average'
            value={movie.vote_average}
            fullWidth
            disabled
          />
          <TextField
            label='Vote Count'
            value={movie.vote_count}
            fullWidth
            disabled
          />
        </DialogContent>
      )
    }

    return (
      <Dialog
        open={!!movie}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        {title}
        {content}
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}