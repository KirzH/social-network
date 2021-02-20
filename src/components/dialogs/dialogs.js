import React from "react"
import Message from "./message/message"
import DialogItem from "./dialog-item/dialog-item"
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer"
import a from "./dialogs.module.css"

const Dialogs = props => {
	let state = props.store.getState().dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	))
	let messagesElements = state.messages.map(m => (
		<Message message={m.message} />
	))
	let newMessageBody = state.newMessageBody

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}
	let onNewMessageChange = event => {
		let body = event.target.value
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<div className={a.dialogs}>
			<div className={a.dialogsItems}>{dialogsElements}</div>
			<div className={a.messages}>{messagesElements}</div>

			<div>
				<div>
					<textarea
						placeholder="Enter your message"
						// value={onMessageBody}
						onChange={onNewMessageChange}
					/>
				</div>
				<div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
