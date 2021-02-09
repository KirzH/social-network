import React from "react"
import s from "./post.module.css"

const Post = props => {
	return (
		<div className={s.item}>
		  <img src='https://sun9-56.userapi.com/impf/c836428/v836428779/c569/JyzscdMKmdU.jpg?size=720x532&quality=96&proxy=1&sign=3b5fb4abc5fa18ada0eb1fa060e52984&type=album' />
			{ props.message }
			  <div>
			<span>like</span> { props.likesCount }
		  </div>
		</div>
	  )
	}

export default Post
