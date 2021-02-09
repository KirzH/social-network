import React from "react"
import ProfileInfo from "./components/profile-info/profile-info"
import MyPosts from "./components/my-posts/my-posts"

import "./profile.css"

const Profile = props => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}

export default Profile
