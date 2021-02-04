import React from 'react'

import './my-posts.module.css'

const MyPost = (props) => {

    let postsElements = props.posts.map( d => 
        <ProfileItem name={d.name} id={d.id}  />);

    return (
        <div>
            { postsElements }
        </div>
    )
}

export default MyPost;