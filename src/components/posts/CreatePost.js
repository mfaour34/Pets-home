import React, { Component } from 'react'
import {createPost} from '../../store/actions/postActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePic = this.handlePic.bind(this);
        this.fileInput = React.createRef();
    }

    state = {
        title: '',
        description: '',
        phone: '',
        image: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createPost(this.state,this.props);
    }

    handlePic = (e) => {
       this.setState({
           image:this.fileInput.current.files[0]
       })
       
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        if(!this.props.auth.uid){
            return <Redirect to='/signin'/>
        }
        //console.log(this.props)
        return (
            <div className="container center root">
                <div className="section white">
                    <div className="row">
                        <form onSubmit={this.handleSubmit} className="col s12">
                            <div className="row ">
                                <h4 className="grey-text text-darken-3">Create Post</h4>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" required value={this.state.title} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" required className="materialize-textarea" onChange={this.handleChange} value={this.state.description} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" required onChange={this.handleChange} value={this.state.phone} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="file-field input-field">
                                    <div className="btn waves-effect waves-light pinkColor">
                                        <span>Image</span>
                                        <input type="file" required id="image" ref={this.fileInput} onChange={this.handlePic} />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input type="text" disabled className="file-path" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="center">
                                    <button className="btn waves-effect waves-light pinkColor" type="submit" name="action">Submit
                                         <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createPost: (post,props) => dispatch(createPost(post,props))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)