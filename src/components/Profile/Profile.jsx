import React from 'react'
import c from './Profile.module.css'
import ComponentInfo from './ComponentInfo/ComponentInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'
import { Redirect } from 'react-router-dom'


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader></Preloader>
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;



    return (
        <div className={c.content}>
            <ComponentInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}></ComponentInfo>
            <MyPostsContainer store={props.store} />
        </div>

    )
}

export default Profile