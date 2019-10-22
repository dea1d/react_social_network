import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../static/messageReducer';
import Dialog from './Dialogs';



const DialogContainer = (props) => {

    let state = props.store.getState();




    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }
    let onPostMessage = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    }


    return (
        <Dialog addMessage={addMessage}
            onPostMessage={onPostMessage}
            newMessageText={state.messagesPage.newMessageText}
            messageData={state.messagesPage.messageData}
            dialogsData={state.messagesPage.dialogsData} />
    )
}

export default DialogContainer