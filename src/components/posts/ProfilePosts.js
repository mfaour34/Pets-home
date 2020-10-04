import React from 'react'
import { NavLink } from 'react-router-dom'
const ProfilePosts=({posts})=>{
    console.log(posts)
    return (
        <div className="root" >
            {posts && posts.map(post=>{
                return(
                    <div className="col s6 s6 l6" key={post.id}>
                        <NavLink to={'/post/'+post.id}><h5>{post.title}</h5></NavLink>
                    </div>
                )
            })}
            
        </div>
    )
}
export default ProfilePosts