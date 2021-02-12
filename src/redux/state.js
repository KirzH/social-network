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
		},
		sidebar: {},
	},
	getState() {
		return this._state
	},
	rerenderEntireTree() {
		console.log("state changed")
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likeCount: 0,
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ""
		this._rerenderEntireTree(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._rerenderEntireTree(this._state)
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer
	},
}

window.store = store

export default store
