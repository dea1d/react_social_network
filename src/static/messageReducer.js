const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialMessages = {
    messageData: [
        { id: 1, message: '862-1610' },
        { id: 2, message: '1613-1917' },
        { id: 3, message: '1917-1991' },
    ],
    dialogsData: [
        { id: 1, name: 'York' },
        { id: 2, name: 'London' },
        { id: 3, name: 'Wessex' },
        { id: 4, name: 'Nartumbira' },
        { id: 5, name: 'Paris' },
        { id: 6, name: 'Mersia' }
    ],
    newMessageText: '1033-1043'
}

const messageReducer = (state = initialMessages, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText,
        }
        let stateCopy = { ...state }
        stateCopy.messageData = [...state.messageData]
        stateCopy.messageData.push(newMessage);
        stateCopy.newMessageText = ''
        return stateCopy;
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        let stateCopy = { ...state }
        stateCopy.newMessageText = action.newMessage;
        return stateCopy;
    }

    return state;
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}


export default messageReducer;

