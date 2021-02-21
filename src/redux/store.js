// import { profileReducer } from "./proofile-reducer"
// import { dialogsReducer } from "./dialogs-reducer"
// import { sidebarReducer } from "./sidebar-reducer"

// let store = {
// 	_state: {
// 		profilePage: {
// 			posts: [
// 				{ id: 1, message: "Hey, how are you?", likesCount: 5 },
// 				{ id: 2, message: "Hello World", likesCount: 5 },
// 				{ id: 3, message: "Dont move", likesCount: 5 },
// 				{ id: 4, message: "Be careful", likesCount: 5 },
// 			],
// 			newPostText: "Hello bro",
// 		},
// 		dialogsPage: {
// 			dialogs: [
// 				{ name: "Dmitry", id: "1" },
// 				{ name: "Mikhail", id: "2" },
// 				{ name: "Artyom", id: "3" },
// 				{ name: "Ilya", id: "4" },
// 				{ name: "Yulia", id: "5" },
// 			],
// 			messages: [
// 				{ message: "Hi", id: "1" },
// 				{ message: "Good bye", id: "2" },
// 				{ message: "Hello World", id: "3" },
// 				{ message: "Hey, I'm Vadim", id: "4" },
// 				{ message: "Good bye", id: "5" },
// 			],
// 			newMessageBody: "",
// 		},
// 		sidebar: {},
// 	},
// 	_callSubscriber() {
// 		console.log("State changed")
// 	},

// 	getState() {
// 		return this._state
// 	},
// 	subscribe(observer) {
// 		this._callSubscriber = observer
// 	},

// 	dispatch(action) {
// 		this._state.profilePage = profileReducer(this._state.profilePage, action)
// 		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
// 		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

// 		this._callSubscriber(this._state)
// 	},
// }

// export default store
window.store = store
