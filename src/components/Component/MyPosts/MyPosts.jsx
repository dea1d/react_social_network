import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    let postsElements = props.postsData.map(postsEl => <Post message={postsEl.message} id={postsEl.id} like_count={postsEl.like_count} dislike_count={postsEl.dislike_count} />)

    let getPostEl = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let deletePost = () => {
        alert('gg')
    }

    let onPostchange = () => {
        let text = getPostEl.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className={m.postblock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={getPostEl} onChange={onPostchange} value={props.newPostText}></textarea>
                </div>

                <div className={m.buttons}>
                    <button onClick={addPost}>Add post</button>
                    <button onClick={deletePost}>Delete post</button>
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