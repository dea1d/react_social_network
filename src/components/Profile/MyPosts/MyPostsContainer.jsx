import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from './../../../static/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {


//     let state = props.store.getState();





//     let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action);
//     }
//     let onPostchange = (text) => {
//         let action = updateNewPostActionCreator(text);
//         props.store.dispatch(action);
//     }


//     return (
//         <MyPosts updateNewPostText={onPostchange} addPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />

//         // Задача контейнерной компоненты - отрисовать презентационную и удовлетворить её некоторыми данными, к примеру функция addPost. 
//     )  // Тем самым ограничить её от связи со store и сделать куда более тупой ( т.е лишь для отрисовки с помощью входящих данных из props).
// }




const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            let action = addPostActionCreator(newPost);
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer