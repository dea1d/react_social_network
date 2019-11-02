import React from 'react';
import DialogItem from './DialogItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import { dialogs } from './../../assets/styles/styles'


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
        <div style={dialogs.all_dialogs}>
            <div style={dialogs.dialog}>
                <div style={dialogs.items}>
                    {dialogsElements}
                </div>
                <div style={dialogs.messages}>
                    {messageElements}
                    <div>
                        <textarea placeholder='Enter your message' ref={PostEl} style={dialogs.items} value={props.newMessageText} onChange={onPostMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Add Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialog