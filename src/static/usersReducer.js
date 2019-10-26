
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialUsers = {
    usersData: []

};

const usersReducer = (state = initialUsers, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: true }
                }
                return u;
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: false }
                };
                return u;
            })
        }

    } else if (action.type === SET_USERS) {
        return {
            ...state,
            usersData: [...state.usersData, ...action.usersData],
        }
    }

    return state;


}


export const followActionCreator = (userId) => {
    return {
        type: FOLLOW, userId

    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW, userId

    }
}
export const setUsersActionCreator = (usersData) => {
    return {
        type: SET_USERS, usersData

    }
}


export default usersReducer;