const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const componentReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: state.newPostText,
            like_count: 23,
            dislike_count: 10,
        }
        state.postsData.push(newPost);
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default componentReducer;