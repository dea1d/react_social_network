import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { updateNewPostText, addPost, addMessage } from './static/state.js'
import { updateNewMessageText } from './static/state.js'


export let renderedEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>, document.getElementById('root'));

}