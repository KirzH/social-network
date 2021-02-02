import React from 'react'
import { NavLink } from 'react-router-dom';

import a from './dialog-item.module.css'

const DialogItem = (props) => {
    
    let path = "/dialogs" + props.id;

    return (
        <div className={a.dialog + ' ' + a.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;