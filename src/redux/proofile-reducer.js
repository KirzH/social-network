const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
	posts: [
		{ id: 1, message: "Hey, how are you?", likesCount: 5 },
		{ id: 2, message: "Hello World", likesCount: 5 },
		{ id: 3, message: "Dont move", likesCount: 5 },
		{ id: 4, message: "Be careful", likesCount: 5 },
	],
	newPostText: "Hello bro",
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0,
			}
			state.posts.push(newPost)
			state.newPostText = ""
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})
