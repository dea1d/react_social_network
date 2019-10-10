import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    return (
        <div className={m.postblock}>
            MyPosts
                <div>
                <textarea></textarea>
                <div className={m.buttons}>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
            </div>
            <div className={m.posts}>
                <Post message='Hi, Django' like_count='15 ' dislike_count='20'></Post>
                <Post message='Hi, Java' like_count=' 20' dislike_count='15'></Post>
            </div>
        </div>
    )
}

export default MyPosts