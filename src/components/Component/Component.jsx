import React from 'react'
import c from './Component.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ComponentInfo from './ComponentInfo/ComponentInfo.jsx'

const Component = (props) => {
    return (
        <div className={c.content}>
            <ComponentInfo></ComponentInfo>
            <MyPosts postsData={props.state.postsData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText} />
        </div>

    )
}

export default Component