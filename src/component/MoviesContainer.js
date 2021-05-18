import { Container, Grid, Typography, makeStyles, useMediaQuery, useTheme, AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStats from './MovieStats'

const useStyle = makeStyles({

    formArea:{
        width:'100%',
        position:(matches) => {
            return matches ? 'relative' : 'fixed'
        },
        top: (matches) => {
            return matches ? 20 : 80
        },
        right: (matches) => {
            return matches ? null : 25
        }
    },
    lists: {
        marginTop: 50
    }
})


const MoviesContainer = (props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyle(matches)

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant={matches ? 'h5': 'h4'}>My Big Movie List</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                
                <Grid 
                    container 
                    spacing ={3}
                    className={classes.lists}
                    direction={'column-reverse'}
                >
                    <Grid item
                        lg={9}
                        md={9}
                        sm={12}
                    >
                        <MovieList />
                    </Grid>
                    <Grid item
                        lg={3}
                        md={3}
                        sm={12}
                        className={classes.formArea}
                    >
                        <MovieForm />
                        <MovieStats />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MoviesContainer