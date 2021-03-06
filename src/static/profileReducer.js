import { userAPI, profileAPI } from "../rest-api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialComponent = {
    postsData: [
        { like_count: 20, dislike_count: 9, message: 'Hi, C#', id: 1 },
        { like_count: 21, dislike_count: 10, message: 'Hi, Java', id: 2 },
        { like_count: 18, dislike_count: 32, message: 'Hi, C++', id: 3 },
    ],
    newPostText: 'hi, python',
    profile: null,
    status: ' '
};

const profileReducer = (state = initialComponent, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: action.newPostText,
            like_count: 23,
            dislike_count: 10,
        };
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
        };
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText

        };
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile,
        }
    } else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status,
        }
    }
    return state;
}


export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatusProfileActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}



export const setProfileThunkCreator = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data));
    });
}

export const setStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusProfileActionCreator(response.data))

    })
}


export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfileActionCreator(status))
        }

    })
}



export default profileReducer;