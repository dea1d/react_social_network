import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    let postsData = [
        { like_count: 20, dislike_count: 9, message: 'Hi, C#', id: 1 },
        { like_count: 21, dislike_count: 10, message: 'Hi, Java', id: 2 },
        { like_count: 18, dislike_count: 32, message: 'Hi, C++', id: 3 },
    ]


    let postsElements = postsData.map(postsEl => <Post message={postsEl.message} id={postsEl.id} like_count={postsEl.like_count} dislike_count={postsEl.dislike_count} />)


    return (
        <div className={m.postblock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div className={m.buttons}>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>

            </div>
            <div className={m.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

export default MyPosts