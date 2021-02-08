import React from "react"
import ProfileInfo from "./components/profile-info/profile-info"
import MyPosts from "./components/my-posts/my-posts"

import "./profile.css"

const Profile = props => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</div>
	)
}

export default Profile
