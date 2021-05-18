const initialMovieState = []

const moviesReducer = (state = initialMovieState, action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return [action.payload, ...state ]
        case 'DELETE_MOVIE':
            return state.filter(ele => ele.id !== action.payload)
        default:
            return state
    }
} 

export default moviesReducer