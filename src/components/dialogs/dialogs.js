import React from "react"
import Message from "./message/message"
import DialogItem from "./dialog-item/dialog-item"
import a from "./dialogs.module.css"

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} key={d.key} id={d.id} />
	))
	let messagesElements = state.messages.map(m => (
		<Message message={m.message} key={m.key} />
	))
	let newMessageBody = state.newMessageBody

	let onSendMessageClick = () => {
		props.sendMessage()
	}
	let onNewMessageChange = e => {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}

	return (
		<div className={a.dialogs}>
			<div className={a.dialogsItems}>{dialogsElements}</div>
			<div className={a.messages}>{messagesElements}</div>

			<div>
				<div>
					<textarea
						placeholder="Enter your message"
						value={newMessageBody}
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
