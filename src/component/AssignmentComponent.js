import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {inputChange} from '../action/inputAction'

const AssignmentComponent = (props) => {
    const inputValue = useSelector(state => state.input)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputChange(e.target.value))
    }

    return (
        <div>
            <input value={inputValue.split('').reverse().join('')} onChange={handleChange} placeholder='enter string'/>
            <h2> {inputValue} </h2>
        </div>
    )
}

export default AssignmentComponent