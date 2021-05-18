import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Card, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteMovie } from '../action/moviesAction'

const MovieCard = (props) => {
    const {movie} = props
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteMovie(id))
    }

    return (
        <Grid 
            item
            md={6} 
            sm={12} 
            lg={6}
            xs={12}
        >
            <Card elevation={4}>
                <CardHeader
                    title={movie.movie}   
                    action={
                        <IconButton onClick={() => handleDelete(movie.id)}>
                            <DeleteForeverIcon />
                        </IconButton>
                    } 
                >
                </CardHeader>
                <CardContent>
                    <Typography variant='subtitle2'>
                        Ranking - #{movie.rating}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MovieCard