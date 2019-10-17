import './index.css';
import * as serviceWorker from './serviceWorker';
import { renderedEntireTree } from './rendered.js'
import state from './static/state.js'


renderedEntireTree(state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
