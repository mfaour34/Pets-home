import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/create">Create Post</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><a href="#" onClick={props.signOut}>Sign Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)