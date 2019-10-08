import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div className={m.item_2}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}

export default MyPosts