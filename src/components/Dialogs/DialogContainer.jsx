import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../static/messageReducer';
import Dialog from './Dialogs';
import { connect } from 'react-redux'



// const DialogContainer = (props) => {

//     let state = props.store.getState();




//     let addMessage = () => {
//         let action = addMessageActionCreator();
//         props.store.dispatch(action);
//     }
//     let onPostMessage = (text) => {
//         let action = updateNewMessageActionCreator(text);
//         props.store.dispatch(action);
//     }


//     return (
//         <Dialog addMessage={addMessage}
//             onPostMessage={onPostMessage}
//             newMessageText={state.messagesPage.newMessageText}
//             messageData={state.messagesPage.messageData}
//             dialogsData={state.messagesPage.dialogsData} />
//     )
// }





const mapStateToProps = (state) => {
    return {
        messageData: state.messagesPage.messageData,
        dialogsData: state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostMessage: (text) => {
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        }
    }
}


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


// Контейнерная компонента с connect, который возвращает новую контейнерную компоненту


export default DialogContainer