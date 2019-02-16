import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CardMedia from '@material-ui/core/Card'

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
          {/* <CardMedia
            className="movie-details-image"
            image={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title={movie.title}
          /> */}
          <img
            className='movie-details-image'
            src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            alt='img'
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
      <div>
        <Button
          variant='outlined'
          color='primary'
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
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
      </div>
    )
  }
}

// export default MovieDialog
