import React from 'react';

import a from './dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={a.dialogs}>
            <div className={a.dialogsItems}>
                <div className={a.dialog + ' ' + a.active}>
                   Dmitry
                </div>
                <div className={a.dialog}>
                   Mikhail
                </div>
                <div className={a.dialog}>
                   Ilya
                </div>
                <div className={a.dialog}>
                   Yulia
                </div>
                <div className={a.dialog}>
                   Edik
                </div>
            </div>
            <div className={a.messages}>
                <div className={a.message}>Hi</div>
                <div className={a.message}>How ere you</div>
                <div className={a.message}>Hello World</div>
            </div>
        </div>
    );
};

export default Dialogs;