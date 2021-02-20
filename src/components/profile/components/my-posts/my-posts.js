import React from "react"
import Post from "./post/post"
// import s from "./my-posts.module.css"

import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../redux/proofile-reducer"

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElements = React.createRef()

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = () => {
		let text = newPostElements.current.value
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action)
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
					/>
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
