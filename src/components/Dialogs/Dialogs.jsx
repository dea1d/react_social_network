import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';



const Dialog = (props) => {
    let messageElements = props.messageData.map(messageEl => <MessageItem message={messageEl.message} id={messageEl.id} />)
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


    let PostEl = React.createRef()


    let onAddMessage = () => {
        props.addMessage();
    }
    let onPostMessageChange = () => {
        let text = PostEl.current.value
        props.onPostMessage(text)
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
                        <textarea placeholder='Enter your message' ref={PostEl} className={d.dialogs_items} value={props.newMessageText} onChange={onPostMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage} className={d.buttons}>Add Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialog