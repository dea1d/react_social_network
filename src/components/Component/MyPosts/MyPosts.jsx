import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    let postsElements = props.postsData.map(postsEl => <Post message={postsEl.message} id={postsEl.id} like_count={postsEl.like_count} dislike_count={postsEl.dislike_count} />)

    let getPostEl = React.createRef()

    let addPost = () => {
        let text = getPostEl.current.value
        alert(text)
    }

    let deletePost = () => {
        alert('gg')
    }


    return (
        <div className={m.postblock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={getPostEl}></textarea>
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