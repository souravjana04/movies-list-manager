import { createStore, combineReducers } from 'redux'
import moviesReducer from '../reducer/moviesReducer'
import inputReducer from '../reducer/inputReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReducer,
        input: inputReducer
    }))
    return store
}

export default configureStore