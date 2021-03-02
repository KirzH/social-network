const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
	newMessageBody: " ",
}

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body,
			}

		case SEND_MESSAGE:
			let body = state.newMessageBody
			return {
				...state,
				newMessageBody: " ",
				messages: [...state.messages, { id: 6, message: body }],
			}

		default:
			return state
	}
}
export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
})
export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
})

export default dialogsReducer
