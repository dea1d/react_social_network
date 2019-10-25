import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../static/usersReducer';




let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        set_user: (users) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer