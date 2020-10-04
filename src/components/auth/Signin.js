import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
class Signin extends Component {

    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
        this.setState({
            email: '',
        password: '',
        })
    }

    render() {
        if (this.props.auth.uid) {//checking if looged in or not
            return <Redirect to="/" />
        }
        return (
            <div className="container center root">
                <div className="section white">
                    <div className="row">
                        <br/><br className="hide-on-med-and-down"/>
                        <form className="col s12 white" onSubmit={this.handleSubmit}>
                            <div className="row">
                            <h5 className="grey-text text-darken-3">Sign In</h5>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mail</i>
                                    <input type="email" id="email" onChange={this,this.handleChange} value={this.state.email}/>
                                    <label htmlFor="email">E-mail</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input required type="password" id="password" onChange={this,this.handleChange} value={this.state.password}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="center">
                                    <button className="btn waves-effect waves-light pinkColor" type="submit" name="action">Submit
                                         <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="center">
                                    <p className="red-text">{this.props.authError}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signIn: (creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)