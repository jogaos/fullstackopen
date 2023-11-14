import React from 'react'

const Total = ({ parts }) => {
    return (
        <p><b>
            total of {' '}
            {parts.reduce(
                (accumulator, currentValue) => accumulator + currentValue.exercises, 0,)
            }
            {' '} exercises
        </b></p>
    )
}


export default Total