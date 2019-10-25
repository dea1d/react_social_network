const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialUsers = {
    usersData: [
        // { fullname: 'Bot1', message: 'text1', city: 'GPS1', id: 1, followed: true, },
        // { fullname: 'Bot2', message: 'text2', city: 'GPS2', id: 2, followed: false, },
        // { fullname: 'Bot3', message: 'text3', city: 'GPS3', id: 3, followed: true, },
        // { fullname: 'Bot4', message: 'text4', city: 'GPS4', id: 4, followed: false, },
    ]

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
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users

    }
}


export default usersReducer;