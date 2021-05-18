import { Card, CardContent, Typography, makeStyles  } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const useStyle = makeStyles({
    stats: {
        marginTop: 30
    }
})

const MovieStats = (props) => {
    const movies = useSelector(state => state.movies)
    const topRankedMovie = _.sortBy(movies,'rating')[0] 
    const classes = useStyle()

    return (
        <Card className = {classes.stats} elevation={2}>
            <CardContent>  
                <Typography variant='body1'>
                    <strong>Total Movies</strong> - {movies.length} 
                </Typography>
                {
                    (movies.length > 0 && topRankedMovie.movie && topRankedMovie.rating) && (
                        <Typography variant='body1'>
                            <strong>Top ranked movie</strong> - {topRankedMovie.movie} <br/>
                            <strong>Ranking</strong> - #{topRankedMovie.rating}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default MovieStats