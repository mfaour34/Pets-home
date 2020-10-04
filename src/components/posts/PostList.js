import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getImage} from '../../store/actions/postActions'
import {getPost} from '../../store/actions/postActions'
class PostList extends Component {

    getUrl = (id) =>{
        //console.log(id)
        //console.log(this.props.getImage(id))
        //  this.props.getImage(id);
        //  return this.props.url
        return '/images/angel.jpg'
    }


    render() {
        const {posts} = this.props
       // console.log(posts);
       // console.log(this.props.firebase)
       
        return (
            <div className='root'>
                {posts && posts.map(post=>{
                    
                   return(
                    <div className="col s12 m6 l6" key={post.id}>
                    <div className="card large">
                        <div className="card-image">
                            <img src={post.url} className="responsive-img "  alt="Pet Pic" />
                            <span className="card-title">{post.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{post.description}</p>
                        </div>
                        <div className="card-action">
                            <NavLink to={'/post/'+post.id}>Show Post</NavLink>
                        </div>
                    </div>
                </div>
                   ) 
                })}
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        url:state.posts.url,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getImage: (id) => dispatch(getImage(id)),
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(PostList);