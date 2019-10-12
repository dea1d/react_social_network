import React from 'react'
import d from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={d.item + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    )
}

const MessageItem = (props) => {
    return (
        <div className={d.message_item}>
            {props.message}
        </div>
    )
}

const Dialog = (props) => {

    let dialogsData = [
        { id: 1, name: 'York' },
        { id: 2, name: 'London' },
        { id: 3, name: 'Wessex' },
        { id: 4, name: 'Nartumbira' },
        { id: 5, name: 'Paris' },
        { id: 6, name: 'Mersia' }
    ]
    let messageData = [
        { id: 1, message: '862-1610' },
        { id: 2, message: '1613-1917' },
        { id: 3, message: '1917-1991' },
    ]

    let messageElements = messageData.map(messageEl => <MessageItem message={messageEl.message} id={messageEl.id} />)
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    return (
        <div className={d.all_dialogs}>
            <div className={d.dialogs}>
                <div className={d.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={d.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Dialog