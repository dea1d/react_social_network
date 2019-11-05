import React from 'react';
import { connect } from 'react-redux';
import ProfileAPI from './ProfileAPI';
import { addPostActionCreator, updateNewPostActionCreator, setUserProfileActionCreator, setProfileThunkCreator } from '../../static/profileReducer';
import { withRouter } from 'react-router-dom'




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
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
        }
    }
}




let withDataContainerComponent = withRouter(ProfileAPI)


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withDataContainerComponent)


export default ProfileContainer