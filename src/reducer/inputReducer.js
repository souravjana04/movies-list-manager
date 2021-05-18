const initialValue = ''

const inputReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'INPUT_CHANGE':
            return action.payload.split('').reverse().join('')
        default: 
            return state
    }
}

export default inputReducer