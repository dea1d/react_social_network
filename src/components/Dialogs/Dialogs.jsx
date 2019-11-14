import React from 'react';
import DialogItem from './DialogItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import { dialogs } from './../../assets/styles/styles'
import { Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'


const Dialog = (props) => {
    let messageElements = props.messageData.map(messageEl => <MessageItem message={messageEl.message} id={messageEl.id} />)
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


    let PostEl = React.createRef()


    let onPostMessageChange = () => {
        let text = PostEl.current.value
        props.onPostMessage(text)
    }
    let onAddMessagetest = (values) => {
        props.addMessage(values.addMessage)
    }


    if (!props.isAuth) return <Redirect to={'/login'} />;


    return (
        <div style={dialogs.all_dialogs}>
            <div style={dialogs.dialog}>
                <div style={dialogs.items}>
                    {dialogsElements}
                </div>
                <div style={dialogs.messages}>
                    {messageElements}
                    <ReduxaddMessageForm onSubmit={onAddMessagetest}></ReduxaddMessageForm>
                </div>

            </div>
        </div>
    )
}


const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter message'} name={'addMessage'} component={'textarea'}></Field>
        </div>
        <div>
            <button onClick={props.addMessage}>Add Message</button>
        </div>
    </form>
}
const ReduxaddMessageForm = reduxForm({
    form: 'addMessage'
})(MessageForm)

export default Dialog