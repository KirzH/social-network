import React from "react"
import { NavLink } from "react-router-dom"

import a from "./navbar.module.css"

const Navbar = () => {
	return (
		<nav className={a.nav}>
			<div className={a.item}>
				<div>
					<NavLink to='/profile' activeClassName={a.active}>
						Profile
					</NavLink>
				</div>
				<div>
					<NavLink to='/message' activeClassName={a.active}>
						Messages
					</NavLink>
				</div>
				<div>
					<NavLink to='/news' activeClassName={a.active}>
						News
					</NavLink>
				</div>
				<div>
					<NavLink to='/music' activeClassName={a.active}>
						Music
					</NavLink>
				</div>
				<div>
					<NavLink to='/settings' activeClassName={a.active}>
						Settings
					</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
