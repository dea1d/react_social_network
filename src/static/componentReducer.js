const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialComponent = {
    postsData: [
        { like_count: 20, dislike_count: 9, message: 'Hi, C#', id: 1 },
        { like_count: 21, dislike_count: 10, message: 'Hi, Java', id: 2 },
        { like_count: 18, dislike_count: 32, message: 'Hi, C++', id: 3 },
    ],
    newPostText: 'hi, python'
};

const componentReducer = (state = initialComponent, action) => {
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