import React from 'react';
import { connect } from 'react-redux';
import ProfileAPI from './ProfileAPI';
import { addPostActionCreator, updateNewPostActionCreator, setUserProfileActionCreator } from '../../static/profileReducer';
import { withRouter } from 'react-router-dom'




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },

        set_user_profile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        },
    }
}



let withDataContainerComponent = withRouter(ProfileAPI)


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withDataContainerComponent)


export default ProfileContainer