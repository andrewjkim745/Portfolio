import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'
import Button from './Button.js'


export const Nav = (props) => {
    return (
        <div className='nav-container'>
            <div className="logo">
                <NavLink exact to='/'>
                    <img className='asianMan' src='https://i.imgur.com/ng6vglp.png' />
                </NavLink>
            </div>
            <div className="nav">
                <ul className='nav-links'>
                        <NavLink exact to='/about' activeClassName='active'>
                            About
                        </NavLink>
                        <NavLink exact to='/portfolio' activeClassName='active'>
                            Portfolio
                        </NavLink>

                        <NavLink exact to='/resume' activeClassName='acive'>
                            Resume
                        </NavLink>
                </ul>
            </div>     
        </div>
    )
}

export default Nav