import React from 'react'

import './my-posts.module.css'

const MyPost = (props) => {
    return (
        <div>
            <div><h3>myPost</h3></div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div>newPost</div>
            <div>post1</div>
            <div>post2</div>
        </div>
    )
}

export default MyPost;