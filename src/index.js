// import * as serviceWorker from './serviceWorker'
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/redux-store"
//  import { rerenderEntireTree } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"

let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById("root")
	)
}

rerenderEntireTree()
store.subscribe(() => {
	rerenderEntireTree()
})
