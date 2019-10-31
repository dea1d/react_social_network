
const SET_USER_DATA = 'SET_USER_DATA';

let initialUsers = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialUsers, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            isAuth: true,
        }
    }
    return state;


}


export const setUserDataActionCreator = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: { userId, email, login }

    }
}




export default authReducer;