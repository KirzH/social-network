const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
	users: [
		{
			id: 1,
			followed: true,
			fullName: "Mikhail",
			status: "I am your best friend",
			location: { city: "Kalinkovichi", country: "Belarus" },
		},
		{
			id: 2,
			followed: true,
			fullName: "Artyom",
			status: "I am your best friend",
			location: { city: "Gorodey", country: "Belarus" },
		},
		{
			id: 3,
			fullName: "Rodion",
			followed: false,
			status: "I am your best friend",
			location: { city: "Balashikha", country: "Russia" },
		},
	],
}

const UsersReduser = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				// users: [...state.users]
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				}),
			}

		case UNFOLLOW:
			return {
				...state,
				// users: [...state.users]
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				}),
			}

		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}
		default:
			return state
	}
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unFollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })

export default UsersReduser
