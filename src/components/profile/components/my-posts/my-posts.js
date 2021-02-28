import React from "react"
import Post from "./post/post"
// import s from "./my-posts.module.css"

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div>{postsElements}</div>
		</div>
	)
}

export default MyPosts
