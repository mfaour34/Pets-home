import React, { Component } from 'react'
import M from 'materialize-css'
import PostList from '../posts/PostList'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
class Dashboard extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
    }
    render() {
        console.log(this.props.auth)
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src="/images/cat.jpg" alt="" /></div>
                </div>
                <div className="section-white">
                    <div className="row container">
                        <h2 className="header center">{
                            this.props.posts? 'New Posts' : 'Loading...'
                            }</h2>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <PostList posts={this.props.posts}/>
                        </div>
                    </div>
                    <div className="parallax-container">
                        <div className="parallax"><img src="/images/dog2.jpg" alt="" /></div>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.firestore.ordered.posts,
        auth:state.firebase.auth
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy:['createdAt','desc']}
]))(Dashboard)