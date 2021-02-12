// import * as serviceWorker from './serviceWorker'
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/state"
import { rerenderEntireTree } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

let rerenderEntireTree = (store) => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				state={store.getState()}
				addPost={store.addPost}
				updateNewPostText={store.updateNewPostText}
			/>
			,
		</BrowserRouter>,
		document.getElementById("root")
	)
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
