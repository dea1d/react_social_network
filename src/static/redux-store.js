import { createStore, combineReducers } from "redux";
import messageReducer from "./messageReducer";
import componentReducer from "./componentReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        componentPage: componentReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
    }
);

let store = createStore(reducers);



window.store = store
export default store