import messageReducer from "./messageReducer";
import componentReducer from "./componentReducer";
import sidebarReducer from "./sidebarReducer";




let store = {
    _state: {
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
        sidebar: {

        },
    },
    _callSubcriber() {
        console.log('State is changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },



    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.componentPage.newPostText,
    //         like_count: 23,
    //         dislike_count: 10,
    //     }

    //     this._state.componentPage.postsData.push(newPost);
    //     this._state.componentPage.newPostText = ''
    //     this._callSubcriber(this._state);

    // },
    // addMessage() {
    //     let newMessage = {
    //         message: this._state.messagesPage.newMessageText,
    //     }
    //     this._state.messagesPage.messageData.push(newMessage);
    //     this._state.messagesPage.newMessageText = ''
    //     this._callSubcriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.componentPage.newPostText = newText;
    //     this._callSubcriber(this._state);

    // },
    // updateNewMessageText(newMessage) {

    //     this._state.messagesPage.newMessageText = newMessage;
    //     this._callSubcriber(this._state);

    // },




    dispatch(action) {


        this._state.componentPage = componentReducer(this._state.componentPage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)





        this._callSubcriber(this._state);


    }
}



// store - это OOP

export default store
window.store = store
