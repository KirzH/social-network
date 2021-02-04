import React from 'react';
import Message from './message/message'
import DialogItem from './dialog-item/dialog-item'

import a from './dialogs.module.css';





const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map( m => <Message message={m.message}  />);

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