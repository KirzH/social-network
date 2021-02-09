import React from "react"
import ReactDOM from "react-dom"
import { addPost, updateNewPostText } from "./redux/state"
import App from "./App"
import './index.css'

export let rerenderEntireTree = state => {
	ReactDOM.render(
		<App
			state={state}
			addPost={addPost}
			updateNewPostText={updateNewPostText}
		/>,
		document.getElementById("root")
	)
}
