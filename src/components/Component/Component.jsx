import React from 'react'
import c from './Component.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ComponentInfo from './ComponentInfo/ComponentInfo.jsx'

const Component = (props) => {
    return (
        <div className={c.content}>
            <ComponentInfo></ComponentInfo>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText}></MyPosts>
        </div>

    )
}

export default Component