import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import { reduxForm, Field } from 'redux-form'




const MyPosts = (props) => {
    let postsElements = props.posts.map(postsEl => <Post message={postsEl.message} id={postsEl.id} like_count={postsEl.like_count} dislike_count={postsEl.dislike_count} />)

    let getPostEl = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let deletePost = () => {
        alert('gg')
    }

    let onPostchange = () => {
        let text = getPostEl.current.value
        props.updateNewPostText(text);

    }

    return (
        <div className={m.postblock}>
            <h3>MyPosts</h3>
            <ReduxaddPostForm onSubmit={props.handleSubmit} onAddPost={onAddPost} deletePost={deletePost} onPostchange={onPostchange} getPostEl={getPostEl} newPostText={props.newPostText}
            ></ReduxaddPostForm>
            <div className={m.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

const addPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={props.newPostText} ref={props.getPostEl} onChange={props.onPostchange} name={'addPost'} component={'textarea'} />
        </div>
        <div className={m.buttons}>
            <button onClick={props.onAddPost}>Add post</button>
            <button onClick={props.deletePost}>Delete post</button>
        </div>
    </form>
}
const ReduxaddPostForm = reduxForm({
    // a unique name for the form
    form: 'addPost'
})(addPostForm)


export default MyPosts