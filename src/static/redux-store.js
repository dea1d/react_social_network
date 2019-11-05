import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



window.store = store
export default store