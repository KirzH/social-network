import React from "react"
import ProfileInfo from "./components/profile-info/profile-info"
import MyPostsContainer from "./components/my-posts/my-posts-container"
import "./profile.css"

const Profile = props => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div>
	)
}

export default Profile
