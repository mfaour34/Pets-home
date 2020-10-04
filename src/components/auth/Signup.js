import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
class Signup extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.password === this.state.confirm) {
            this.props.signUp(this.state);

        } else {
            console.log("Passwords dont match")
        }
    }


    render() {
        if (this.props.auth.uid) {//checking if looged in or not
            return <Redirect to="/" />
        }

        return (
            <div className="container center root">
                <div className="section white">
                    <div className="row">
                        <form className="col s12 white" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <h5 className="grey-text text-darken-3">Sign Up</h5>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input required type="text" id="firstname" onChange={this.handleChange} />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input required type="text" id="lastname" onChange={this.handleChange} />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mail</i>
                                    <input type="email" id="email" onChange={this.handleChange} />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input required type="password" id="password" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input required type="password" id="confirm" onChange={this.handleChange} />
                                    <label htmlFor="confirm">Confirm Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="center">
                                    <button className="btn waves-effect waves-light pinkColor" type="submit" name="action">Submit
                                         <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                            <div className="red-text center">
                                {this.props.authError ? <p>{this.props.authError}</p> : null}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        signedUp: state.auth.signedUp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => dispatch(signUp(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Signup)