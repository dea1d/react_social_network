import { renderedEntireTree } from './../rendered.js'


let state = {
    componentPage: {
        postsData: [
            { like_count: 20, dislike_count: 9, message: 'Hi, C#', id: 1 },
            { like_count: 21, dislike_count: 10, message: 'Hi, Java', id: 2 },
            { like_count: 18, dislike_count: 32, message: 'Hi, C++', id: 3 },
        ],
        newPostText: 'hi, python'
    },
    messagesPage: {
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
    },
}
window.state = state

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.componentPage.newPostText,
        like_count: 23,
        dislike_count: 10,
    }



    state.componentPage.postsData.push(newPost);
    state.componentPage.newPostText = ''
    renderedEntireTree(state);


}

export let addMessage = () => {
    let newMessage = {
        message: state.messagesPage.newMessageText,
    }
    state.messagesPage.messageData.push(newMessage);
    state.messagesPage.newMessageText = ''
    renderedEntireTree(state);
}


export let updateNewPostText = (newText) => {

    state.componentPage.newPostText = newText
    renderedEntireTree(state);

}

export let updateNewMessageText = (newMessage) => {

    state.messagesPage.newMessageText = newMessage
    renderedEntireTree(state);

}


export default state