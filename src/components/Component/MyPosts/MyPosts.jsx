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
            <Post message='Hi, Django' like_count='15' dislike_count='20'></Post>
            <Post message='Hi, Java' like_count='20' dislike_count='15'></Post>
        </div>
    )
}

export default MyPosts