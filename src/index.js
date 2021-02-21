// import * as serviceWorker from './serviceWorker'
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/redux-store"
// import { rerenderEntireTree } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

let rerenderEntireTree = state => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				// state={store.getState()}
				// dispatch={store.dispatch(store)}
				state={state}
				dispatch={store.dispatch.bind(store)}
				store={store}
			/>
		</BrowserRouter>,
		document.getElementById("root")
	)
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})
