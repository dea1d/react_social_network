import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './static/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let renderedEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));

}

renderedEntireTree(store.getState());


store.subsrcribe(renderedEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
