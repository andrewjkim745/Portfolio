import React from 'react' 
import './styles/Button.css'


const Button = (props) => {
    return (
        <div>
            <button className='light-mode-button' onClick={props.onClick}>
                <img className='moon' src='https://i.imgur.com/jLrGDVl.png'></img>
            </button>

        </div>
    )
}

export default Button