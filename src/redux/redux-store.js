import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import applyMiddleware from "redux/src/applyMiddleware";
import thunk from 'redux-thunk';


let reducersPackage = combineReducers({
    dialogsPage: dialogsReducer ,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducersPackage, applyMiddleware(thunk));
window.store = store;
export default store;