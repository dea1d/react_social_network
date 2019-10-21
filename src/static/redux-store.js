import { createStore, combineReducers } from "redux";
import messageReducer from "./messageReducer";
import componentReducer from "./componentReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    componentPage: componentReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
})

let store = createStore(reducers);




export default store