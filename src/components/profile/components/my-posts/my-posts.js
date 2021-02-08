import React from "react"
import Post from "./post/post"
import s from "./my-posts.module.css"

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElements = React.createRef()

	let addPost = () => {
		debugger
		let text = newPostElements.current.value
		props.addPost(text)
	}

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElements}></textarea>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div>{postsElements}</div>
		</div>
	)
}

export default MyPosts
