import React from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { deletePost } from '../../store/actions/postActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
class PostDetails extends React.Component {

    state = {
        image: '/images/angel.jpg'
    }



    componentDidMount() {

        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});

        // document.addEventListener('DOMContentLoaded', function () {
        var elems2 = document.querySelectorAll('.parallax');
        var instances2 = M.Parallax.init(elems2, {});

    }


    toast() {
        M.toast({ html: 'Copied!', classes: 'rounded' });
    }


    handleDelete = (id, name) => {
        let choice = window.confirm("Are you sure you want to delete post?");
        if (choice) {
            this.props.deletePost(id, name);
            this.props.history.push('/')
        }
    }



    // getUrl = (id) => {
    //     console.log(typeof(id))
    //     //console.log(this.props.getImage(id))
    //     //this.props.getImage(id);
    //     firebase.storage().ref('post_pics').child(id).getDownloadURL()
    //     .then(url=>{
    //        this.setState({
    //            image:url
    //        })
    //        return null;
    //     }).catch(err=>{
    //         console.error(err);
    //         return '/images/angel.jpg'
    //     })
    //     return null;
    //     //return '/images/angel.jpg'
    // }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to='/signin' />
        }
        let { post } = this.props
        // console.log(post)
        if (post) {
            // let email = this.props.auth.email
            let id = this.props.id;
            //  console.log(post);
            //this.getUrl(id)
            // console.log(this.state.image);

            // console.log(this.props.auth.uid, post.authId);

            const deleteBtn = post.authId === this.props.auth.uid ? (<div className="card-action grey lighten-4 grey-text">
                <div>Posted by {post.authorFirstName + ' ' + post.authorLastName}</div>
                <div>{moment(post.createdAt.toDate().toString()).calendar()}<div className="right"><a onClick={() => this.handleDelete(id, post.image_name)} href="#"><i className="material-icons icon-grey">delete</i></a></div></div>
            </div>) : (<div className="card-action grey lighten-4 grey-text">
                <div>Posted by {post.authorFirstName + ' ' + post.authorLastName}</div>
                <div>{moment(post.createdAt.toDate().toString()).calendar()}</div>
            </div>);


            return (
                <div className='root'>
                    <div className="parallax-container">
                        <div className="parallax"><img src="/images/cat3.jpg" alt="" /></div>
                    </div>
                    <div className="section-white">
                        <div className="container " style={{ paddingTop: 2 + '%' }} >
                            <div className="card">
                                <div className="card-image padding">
                                    <img src={post.url} className="hide-on-large-only" alt="Pet Pic" />
                                    <img src={post.url} className="hide-on-med-and-down" width="200" height="500" alt="Pet Pic" />

                                </div>
                                <div className="card-content">
                                    <p className="card-title" onCopy={this.toast}>{post.title}</p>
                                    <br />
                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header"><i className="material-icons">expand_more</i>Description</div>
                                            <div className="collapsible-body"><span onCopy={this.toast}>{post.description}</span></div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header"><i className="material-icons">expand_more</i>Contact</div>
                                            <div className="collapsible-body">
                                                <ul>
                                                    <li><i className="material-icons" onCopy={this.toast}>phone</i><a href={'tel:' + post.phone}>{post.phone}</a></li>
                                                    <li><i className="material-icons" onCopy={this.toast}>mail</i><a href={'mailto: ' + post.email}>{post.email}</a></li>

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    {deleteBtn}
                                </div>
                            </div>
                        </div>
                        <div className="parallax-container">
                            <div className="parallax"><img src="/images/dog3.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            )
        } else return (
            <div className="container">
                <div className="center">
                    <h5 className="grey-text">
                        Loading Post...
                     </h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    const projects = state.firestore.data.posts;
    const post = projects ? projects[id] : null
    //console.log(project);
    return {
        post,
        auth: state.firebase.auth,
        id: id,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        deletePost: (id,name) => dispatch(deletePost(id,name))
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'posts' }])
)(PostDetails);