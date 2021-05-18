import React, { useState, useEffect } from 'react'
import { FormControl, Input, InputAdornment, InputLabel, makeStyles, MenuItem, Select, useTheme, useMediaQuery } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import _ from 'lodash'

const useStyle = makeStyles({
    search: {
        marginTop: 10,
        marginBottom: 20,
        width:'55%'
    },
    sort: {
        position:'relative',
        float:(matches) => {
            return matches ? null: 'right'
        },
        marginTop: 10,
        marginBottom: 20,
        marginLeft: (matches) => {
            return matches ? 10 : null
        },
        width: (matches) => {
            return matches ? '30%': '20%'
        }
    }
})

const MovieListControl = (props) => {
    const { handleAllMovies, movies, allMovies } = props
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    const classes = useStyle(matches)

    // state variable to control form input
    const [ search, setSearch ] = useState('')
    const [ sortBy, setSortBy ] = useState('')

    useEffect(() => {
        setSearch('')
        setSortBy('')
    }, [movies])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const newMovies = movies.filter(ele => ele.movie.toLowerCase().includes(e.target.value.toLowerCase()))
        handleAllMovies(newMovies)
    }

    const sorting = (value) => {
        switch (value) {
            case 'alphaAsc':
                return _.sortBy(allMovies,'movie') // A -z
            case 'alphaDesc':
                return _.sortBy(allMovies,'movie').reverse() // Z -A
            case 'ratingAsc':
                return _.sortBy(allMovies,'rating') 
            case 'ratingDesc':
                return _.sortBy(allMovies,'rating').reverse() 
            default:
                return _.sortBy(allMovies,'id').reverse()
        }
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
        const newMovies = sorting(e.target.value)
        handleAllMovies(newMovies)
    }

    return (
        <div>
            <FormControl className = {classes.search}>
                <InputLabel>Search movie</InputLabel>
                <Input type='text' 
                    value={search} 
                    onChange={handleSearch} 
                    endAdornment={
                        <InputAdornment>
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl className={classes.sort} disabled={false}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} onChange={handleSort}>
                    <MenuItem value=''>None</MenuItem>
                    <MenuItem value={'alphaAsc'}>A - Z</MenuItem>
                    <MenuItem value={'alphaDesc'}>Z - A</MenuItem>
                    <MenuItem value={'ratingAsc'}>1 - 10</MenuItem>
                    <MenuItem value={'ratingDesc'}>10 - 1</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default MovieListControl