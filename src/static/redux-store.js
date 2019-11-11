import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



window.store = store
export default store