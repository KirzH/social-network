import React from "react"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import DialogsContainer from "./components/dialogs/dialogs"
import { Route } from "react-router-dom"

import "./App.css"

const App = props => {
	return (
		<div className="app">
			<Header />
			<Navbar />
			<div className="app-wrapper-content ">
				<Route path="/message" render={() => <DialogsContainer store={props.store} />} />
				<Route path="/profile" render={() => <Profile store={props.store} />} />
			</div>
		</div>
	)
}

export default App
