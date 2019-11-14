import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import { reduxForm, Field } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../../validation/validators'




const MyPosts = (props) => {
    let postsElements = props.posts.map(postsEl => <Post message={postsEl.message} id={postsEl.id} like_count={postsEl.like_count} dislike_count={postsEl.dislike_count} />)

    let onAddPostTest = (values) => {
        props.addPost(values.addPost);
    }

    return (
        <div className={m.postblock}>
            <h3>MyPosts</h3>
            <ReduxaddPostForm onSubmit={onAddPostTest} ></ReduxaddPostForm>
            <div className={m.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const addPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter post text'} name={'addPost'} component={'textarea'} validate={[requiredField, maxLength10]} />
        </div>
        <div className={m.buttons}>
            <button>Add post</button>
            <button onClick={() => { alert('gg') }}>Delete post</button>
        </div>
    </form>
}
const ReduxaddPostForm = reduxForm({
    // a unique name for the form
    form: 'addPost'
})(addPostForm)


export default MyPosts