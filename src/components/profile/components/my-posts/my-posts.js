import React from "react"
import Post from "./post/post"
import s from "./my-posts.module.css"

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElements = React.createRef()

	let addPost = () => {
		props.addPost()
		props.updateNewPostText("")
	}

	let onPostChange = () => {
		let text = newPostElements.current.value
		props.updateNewPostText(text)
	}

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElements}
						value={props.newPostText}
					></textarea>
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
