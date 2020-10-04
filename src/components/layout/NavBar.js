import React, { Component } from 'react'
import M from 'materialize-css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import SignedInLinksSideNav from './SignedInLinksSideNav'
import SignedInLinks from './SignedInLinks'
import SignedOutLinksSideNav from './SignedOutLinksSideNav'
import SignedOutLinks from './SignedOutLinks'
class NavBar extends Component {


    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }


    render() {
        return (
            <header className='root'>
                <div className="navbar-fixed">
                    <nav>
                        <div className='nav-wrapper container'>

                            <NavLink to="/" className="brand-logo left hide-on-med-and-down"><img src="icons/coollogo_com-2458743-removebg-preview.png" alt=""/></NavLink>
                            <NavLink to="/" href="#" className="brand-logo center hide-on-large-only"><img src="icons/coollogo_com-2458743-removebg-preview.png" alt=""/></NavLink>
                            {this.props.auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks />}
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                    </nav>
                </div>
                <ul id="slide-out" className="sidenav">
                    {this.props.auth.isEmpty ? <SignedOutLinksSideNav /> : <SignedInLinksSideNav />}
                </ul>
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);