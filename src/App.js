import React from "react"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import Dialogs from "./components/dialogs/dialogs"
import { Route } from "react-router-dom"

import "./App.css"

const App = props => {
	return (
		<div className="app">
			<Header />
			<Navbar />
			<div className="app-wrapper-content ">
				<Route
					path="/message"
					render={() => <Dialogs state={props.state.dialogsPage} />}
				/>
				<Route
					path="/profile"
					render={() => (
						<Profile
							profilePage={props.state.profilePage}
							dispatch={props.dispatch}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default App
