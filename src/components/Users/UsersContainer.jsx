import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {
    followActionCreator, followActionCretor, setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
       follow:(userId) => {
           let action = followActionCreator(userId);
           dispatch(action);
       },
        unFollow:(userId) => {
            let action = unfollowActionCreator(userId);
            dispatch(action);
    },
        setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
       }
    }
}

const ConnectUsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default ConnectUsersContainer;