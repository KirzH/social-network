import React from 'react';
import { NavLink } from 'react-router-dom';

import a from './dialogs.module.css';

const DialogItem = (props) => {
    
    let path = "/dialogs" + props.id;

    return (
        <div className={a.dialog + ' ' + a.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={a.message}>{props.message}</div>
    )
}

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