import React from 'react'
import { NavLink } from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'

const SignedOutLinks = (props) => {
    return (
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
    )
}
export default SignedOutLinks