import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducersPackage = combineReducers({
    dialogsPage:dialogsReducer ,
    profilePage:profileReducer,
    sidebar:sidebarReducer

});

let store = createStore(reducersPackage);
// window.store = store;
export default store;