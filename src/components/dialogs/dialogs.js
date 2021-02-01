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

const Dialogs = () => {
    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
               <DialogItem name="Dmitry" id="1" />
               <DialogItem name="Mikhail" id="2" />
               <DialogItem name="Artyom" id="3" />
               <DialogItem name="Ilya" id="4" />
               <DialogItem name="Yulia" id="5" />
            </div>
            <div className={a.messages}>
                <Message message="Hi" />
                <Message message="How ere you" />
                <Message message="Hello World" />
                <Message message="Hey, I'm Vadim" />
                <Message message="Good bye" />
            </div>
        </div>
    );
};

export default Dialogs;