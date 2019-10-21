import React from 'react'
import c from './Component.module.css'
import ComponentInfo from './ComponentInfo/ComponentInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Component = (props) => {
    return (
        <div className={c.content}>
            <ComponentInfo></ComponentInfo>
            <MyPostsContainer store={props.store} />
        </div>

    )
}

export default Component