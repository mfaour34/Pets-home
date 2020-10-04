import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProfilePosts from '../posts/ProfilePosts'
import {getUidPosts} from '../../store/actions/postActions'
class Profile extends Component {
    constructor(){
        super();
        this.state={}
    }
    componentDidMount(){
        this.props.getUidPosts(this.props.creds.auth.uid)
        .then(res=>{
            this.setState({res})
        })
    }
    render() {
        if (!this.props.creds.auth.uid) {
            return <Redirect to='/signin' />
        }
        console.log(this.props)
        const { profile, auth } = this.props.creds;
        
        if(profile.firstName!=null){
            console.log(this.state)
        return (
            <div className="container center">
                <div className="section">
                    <div className="row">
                        <div className="col s12">
                            <h2>{profile.firstName + ' ' + profile.lastName}</h2>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section">
                    <div className="row">

                        <div className="col s12 m6 l6">
                            <h5>{auth.email + ''}</h5>
                        </div>

                        <div className="col s12 m6 l6">
                            <h5>{auth.uid}</h5>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section">
                    <div className="row">
                        <h3 className="grey-text">Ads</h3>
                        <ProfilePosts posts={this.state.res}/>
                    </div>
                </div>
            </div>
        )
    }else 
    return (
        <div className="container">
            <div className="section">
                <div className="center">
                    <h2 className="grey-text">Loading...</h2>
                </div>
            </div>
        </div>
        )
}

}

const mapStatetoProps = (state) => {
    return {
        creds: state.firebase,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUidPosts: (uid) => dispatch(getUidPosts(uid))
    }
}



export default connect(mapStatetoProps, mapDispatchToProps)(Profile)