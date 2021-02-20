const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hey, how are you?", likesCount: 5 },
				{ id: 2, message: "Hello World", likesCount: 5 },
				{ id: 3, message: "Dont move", likesCount: 5 },
				{ id: 4, message: "Be careful", likesCount: 5 },
			],
			newPostText: "Hello bro",
		},
		dialogsPage: {
			dialogs: [
				{ name: "Dmitry", id: "1" },
				{ name: "Mikhail", id: "2" },
				{ name: "Artyom", id: "3" },
				{ name: "Ilya", id: "4" },
				{ name: "Yulia", id: "5" },
			],
			messages: [
				{ message: "Hi", id: "1" },
				{ message: "Good bye", id: "2" },
				{ message: "Hello World", id: "3" },
				{ message: "Hey, I'm Vadim", id: "4" },
				{ message: "Good bye", id: "5" },
			],
			newMessageBody: "",
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log("State changed")
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		if (action.type === "ADD-POST") {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 0,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ""
			this._callSubscriber(this._state)
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
			this._state.dialogsPage.newMessageBody = action.body
			this._callSubscriber(this._state)
		} else if (action.type === "SEND_MESSAGE") {
			let body = this._state.dialogsPage.newMessageBody
			this._state.dialogsPage.newMessageBody = ""
			this._state.dialogsPage.messages.push({ id: 6, message: body })
			this._callSubscriber(this._state)
		}
	},
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
})
export const sendMessageCreator = () => ({
	type: SEND_MESSAGE
})

export default store
window.store = store
