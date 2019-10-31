import React from 'react'
import c from './Profile.module.css'
import ComponentInfo from './ComponentInfo/ComponentInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader></Preloader>
    }



    return (
        <div className={c.content}>
            <ComponentInfo profile={props.profile}></ComponentInfo>
            <MyPostsContainer store={props.store} />
        </div>

    )
}

export default Profile