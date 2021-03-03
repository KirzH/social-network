const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
	users: [
		{
			id: 1,
			photoUrl:
				"https://sun1-96.userapi.com/s/v1/ig2/enwfpnTYksgZlxmoRBQ_kyUYUQcb6GE3JjKYPdGKDW9MtLrbbd5Pbp-HTZSeIEilPyYUqum9YzjeoDHtTkPq_LFA.jpg?size=200x0&quality=96&crop=1,271,1615,1615&ava=1",
			followed: true,
			fullName: "Mikhail",
			status: "I am your best friend",
			location: { city: "Kalinkovichi", country: "Belarus" },
		},
		{
			id: 2,
			photoUrl:
				"https://sun1-91.userapi.com/s/v1/if1/YFwf_zJH9ZMJC7HILvb9wooWoVtSx_df97oLb9RqtpMbpXj_JC3h4y5aT_Kad8ABXvoIFvAz.jpg?size=200x0&quality=96&crop=181,0,1430,1430&ava=1",
			followed: true,
			fullName: "Artyom",
			status: "I am your best friend",
			location: { city: "Gorodey", country: "Belarus" },
		},
		{
			id: 3,
			photoUrl:
				"https://sun1-21.userapi.com/s/v1/ig2/JgyCKsstVa-aQzPrubF0pf_UL_2cW5jOl1ctP5hwiq-IT72tmugI77MGIcME6SfLCFe2lTIMkz--zc9dnWZQXx2b.jpg?size=100x0&quality=96&crop=0,92,736,736&ava=1",
			fullName: "Rodion",
			followed: false,
			status: "I am your best friend",
			location: { city: "Balashikha", country: "Russia" },
		},
	],
}

export const usersReducer = (state = initialState, action) => {
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
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })

// export default usersReducer
