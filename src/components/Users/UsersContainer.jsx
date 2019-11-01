import React from 'react';
import { connect } from 'react-redux';
import UsersAPI from './UsersAPI';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, preloaderUseActionCreator, preloaderFollowingActionCreator } from '../../static/usersReducer';




let mapStateToProps = (state) => {

    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress,
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
        set_user: (usersData) => {
            dispatch(setUsersActionCreator(usersData))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount))
        },
        preloaderUse: (isFetching) => {
            dispatch(preloaderUseActionCreator(isFetching))
        },
        followingProgress: (isFetching) => {
            dispatch(preloaderFollowingActionCreator(isFetching))
        }
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)


export default UsersContainer