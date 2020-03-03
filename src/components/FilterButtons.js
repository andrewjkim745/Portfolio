import React from 'react'



const FilterButtons = (props) => {
    return (
        <div className={props.className}>
            <button onClick={props.onClick}>Current</button>
            <button onClick={props.onClick2}>Completed</button>
        </div>
    )

}

export default FilterButtons