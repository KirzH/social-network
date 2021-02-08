import React from "react"
import p from "./post.module.css"

const Post = props => {
	return <div className='p.item'>{props.posts}</div>
}

export default Post
