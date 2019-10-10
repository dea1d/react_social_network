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
    return (
        <div className={d.all_dialogs}>
            <div className={d.dialogs}>
                <div className={d.dialogs_items}>
                    <DialogItem name='York' id='1'></DialogItem>
                    <DialogItem name='London' id='2'></DialogItem>
                    <DialogItem name='Wessex' id='3'></DialogItem>
                    <DialogItem name='Nartumbria' id='4'></DialogItem>
                    <DialogItem name='Paris' id='5'></DialogItem>
                    <DialogItem name='Mersia' id='6'></DialogItem>
                </div>
                <div className={d.messages}>
                    <MessageItem message='862-1610'></MessageItem>
                    <MessageItem message='1613-1917'></MessageItem>
                    <MessageItem message='1917-1991'></MessageItem>
                </div>
            </div>
        </div>
    )
}

export default Dialog