import { rerenderEntireTree } from "../render"

let state = {
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
}

window.state = state

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likeCount: 0,
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ""
	rerenderEntireTree(state)
}

export let updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}
export default state
