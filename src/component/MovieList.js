import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';
import MovieCard from './MovieCard';
import MovieListControl from './MovieListControl';

const MovieList = (props) => {
    const movies = useSelector((state) => {
        return state.movies
    })
    const [ allMovies, setAllMovies ] = useState(movies)

    useEffect(() => {
        setAllMovies(movies)
    }, [movies])

    const handleAllMovies = (value) => {
        setAllMovies(value)
    }

    return (
        <div>
            <MovieListControl movies = {movies} handleAllMovies = {handleAllMovies} allMovies={allMovies}/>
            <Grid 
                container  
                spacing={3}  
            >
                {
                     allMovies.map(ele => {
                        return <MovieCard key={ele.id} movie = {ele} />
                    })
                }
            </Grid>
        </div>
    )
}

export default MovieList