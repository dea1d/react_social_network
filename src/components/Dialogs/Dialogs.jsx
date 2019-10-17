import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

const Dialog = (props) => {

    let messageElements = props.state.messageData.map(messageEl => <MessageItem message={messageEl.message} id={messageEl.id} />)
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let PostEl = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onPostMessage = () => {
        let text = PostEl.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={d.all_dialogs}>
            <div className={d.dialogs}>
                <div className={d.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={d.messages}>
                    {messageElements}
                    <div>
                        <textarea ref={PostEl} className={d.dialogs_items} value={props.state.newMessageText} onChange={onPostMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage} className={d.buttons}>Add Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialog