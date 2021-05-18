import React, { useState } from 'react'
import { Button, makeStyles, TextField, Typography, InputAdornment } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../action/moviesAction'
import AddIcon from '@material-ui/icons/Add';

const useStyle = makeStyles({
    fields:{
        marginTop: 15,
        marginBottom:10,
        width: '100%'
    },
    button:{
        width:'40%'
    }
})

const MovieForm = (props) => {
    const movies = useSelector(state => state.movies)
    const [ movie, setMovie ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ formError, setFormError ] = useState({}) 
    const errors = {}
    const classes = useStyle()
    const dispatch = useDispatch()

    const validate = () => {
        if(movie.length === 0) {
            errors.movie = true
        } 
        const uniqRank = (movies.length === 0) ? false : movies.map(ele => ele.rating).includes(Number(rating))
        if(
            rating.length === 0 || 
            Number(Math.round(rating)) !== Number(rating) ||
            uniqRank ||
            !(Math.abs(rating) === Number(rating))
        ) {
            errors.rating = true
        }
        setFormError(errors)
    }

    const resetForm = () => {
        setMovie('')
        setRating('')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        if(Object.keys(errors).length === 0) {
            const formData = {
                id: Number(new Date()),
                movie: movie[0].toUpperCase() + movie.slice(1),
                rating: Number(rating)
            }
            dispatch(addMovie(formData))
            resetForm()
        }
    }

    return (
        <>
            <Typography variant='h5'>Add Movie</Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    className={classes.fields}
                    color='primary'
                    label='Movie name'
                    value = {movie}
                    onChange={(e) => setMovie(e.target.value)}
                    size='small'
                    helperText={formError.movie ? "movie name can't be blank" : null}
                    error={formError.movie}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <MovieIcon />
                            </InputAdornment>
                        )
                    }}
                /><br/> 
                <TextField 
                    className={classes.fields}
                    color='primary'
                    label='IMDB Ranking'
                    value = {rating}
                    type='number'
                    onChange={(e) => setRating(e.target.value)}
                    size='small'
                    helperText={formError.rating ? 'ranking must be an unique natural number' : null}
                    error={formError.rating}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <GradeRoundedIcon />
                            </InputAdornment>
                        )
                    }}
                /> <br />
                <Button 
                    className={classes.button}
                    type='submit' 
                    color='primary' 
                    variant='contained'
                    size='small'
                    startIcon={<AddIcon />}
                > ADD </Button>
            </form>
        </>
    )
}

export default MovieForm