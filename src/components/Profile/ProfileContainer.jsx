import React from 'react';
import { connect } from 'react-redux';
import ProfileAPI from './ProfileAPI';
import { addPostActionCreator, updateNewPostActionCreator, setProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator } from '../../static/profileReducer';
import { withRouter } from 'react-router-dom'




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        setProfile: (userId) => {
            dispatch(setProfileThunkCreator(userId))
        },
        setStatus: (userId) => {
            dispatch(setStatusThunkCreator(userId))
        },
        updateStatus: (status) => {
            dispatch(updateStatusThunkCreator(status))
        }
    }
}




let withDataContainerComponent = withRouter(ProfileAPI)


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withDataContainerComponent)


export default ProfileContainer