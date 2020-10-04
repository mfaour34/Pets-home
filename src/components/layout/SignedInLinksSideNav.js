import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
const SignedInLinksSideNav = (props) => {
    return (
        <div>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/create">Create Post</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><a href="#" onClick={props.signOut}>Sign Out</a></li>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinksSideNav)