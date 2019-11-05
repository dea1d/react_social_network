import { userAPI } from './../rest-api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const PRELOADER_USE = 'PRELOADER_USE';
const PRELOADER_FOLLOWING = 'PRELOADER_FOLLOWING';


let initialUsers = {
    usersData: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: [5041, 5042],
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
            usersData: [...action.usersData],
        }
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage,

        }
    } else if (action.type === SET_TOTAL_COUNT) {
        return {
            ...state,
            totalUsersCount: action.count,


        }
    } else if (action.type === PRELOADER_USE) {
        return {
            ...state,
            isFetching: action.isFetching,
        }
    } else if (action.type === PRELOADER_FOLLOWING) {
        return {
            ...state,
            followingIsProgress: action.isFetching ?
                [...state.followingIsProgress, action.userId]
                :
                state.followingIsProgress.filter(id => id != action.userId)
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
export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage

    }
}
export const setTotalCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_COUNT, count: totalUsersCount

    }
}
export const preloaderUseActionCreator = (isFetching) => {
    return {
        type: PRELOADER_USE, isFetching

    }
}

export const preloaderFollowingActionCreator = (isFetching, userId) => {
    return {
        type: PRELOADER_FOLLOWING, isFetching, userId
    }

}


export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(preloaderUseActionCreator(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(preloaderUseActionCreator(false))
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalCountActionCreator(data.totalCount));
        });
    }

}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(preloaderFollowingActionCreator(true, userId));
        userAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followActionCreator(userId))
            }
            dispatch(preloaderFollowingActionCreator(false, userId));
        });
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(preloaderFollowingActionCreator(true, userId));
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowActionCreator(userId))
            }
            dispatch(preloaderFollowingActionCreator(false, userId));
        });
    }

}



export default usersReducer;