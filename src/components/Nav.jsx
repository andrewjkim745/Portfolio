import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'
import Button from './Button.js'


export const Nav = (props) => {
    return (
        <div className='nav-container'>
            <div className="logo">
                <a className='home-link' href="/">
                    <img className='asianMan' src='https://i.imgur.com/ng6vglp.png' />
                </a>
            </div>
            <div className="nav">
                <ul className='nav-links'>
                    <li>
                        <NavLink exact to='/about' activeClassName='active'>
                            About
                        </NavLink>

                    </li>
                    <li>
                        <NavLink exact to='/portfolio' activeClassName='active'>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/resume' activeClassName='acive'>
                            Resume
                        </NavLink>
                    </li>
                    <Button onClick={props.onClick} />
                </ul>

                


            </div>
            
        </div>
    )
}

export default Nav