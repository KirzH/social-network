import React from 'react';
import Message from './message/message'
import DialogItem from './dialog-item/dialog-item'

import a from './dialogs.module.css';

let dialogs = [
    {name: "Dmitry", id: "0"},
    {name: "Mikhail", id: "1"},
    {name: "Artyom", id: "2"},
    {name: "Ilya", id: "3"},
    {name: "Yulia", id: "4"},
]

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

let messages = [
    {message: "Hi", id: "0"},
    {message: "Good bye", id: "1"},
    {message: "Hello World", id: "2"},
    {message: "Hey, I'm Vadim", id: "3"},
    {message: "Good bye", id: "4"}
]

let messagesElements = messages.map( m => <Message message={m.message}  />);

const Dialogs = () => {
    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={a.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;