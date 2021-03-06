import * as axios from "axios"
import React from "react"
import styles from "./users-module.css"
import userPhoto from "../../assets/img/userPhoto.png"

class Users extends React.Component {
	constructor(props) {
		super(props)

		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div>
				<button onClick={this.getUsers}>Get Users</button>
				{this.props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									className={styles.userPhoto}
								/>
							</div>
							<div>
								{u.followed ? (
									<button
										onClick={() => {
											this.props.unfollow(u.id)
										}}
									>
										Follow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id)
										}}
									>
										UnFollow
									</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</span>
							<span>
								{/* <div>{u.location.country}</div> */}
								{/* <div>{u.location.city}</div> */}
							</span>
						</span>
					</div>
				))}
			</div>
		)
	}
}

export default Users
