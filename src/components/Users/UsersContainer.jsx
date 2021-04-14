import React from 'react';
import {connect} from "react-redux";
import * as axios from 'axios';
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/users-reducer";

import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     alert('new object created')

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    pageChangeEvent = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <>
        {this.props.isFetching ? <Preloader/>:null}
        <Users
            users = {this.props.users}
            currentPage = {this.props.currentPage}
            usersInPage = {this.props.usersInPage}
            totalUsersCount = {this.props.totalUsersCount}
            pageChangeEvent = {this.pageChangeEvent}
            follow = {this.props.follow}
            unFollow = {this.props.unFollow}


        />
        </>

    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        usersInPage: state.usersPage.usersInPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch)=> {
//     return {
//        follow:(userId) => {
//            let action = followActionCreator(userId);
//            dispatch(action);
//        },
//         unFollow:(userId) => {
//             let action = unfollowActionCreator(userId);
//             dispatch(action);
//     },
//         setUsers: (users) => {
//             let action = setUsersActionCreator(users);
//             dispatch(action);
//        },
//         setCurrentPage: (page) => {
//             let action = setCurrentPageActionCreator(page);
//             dispatch(action);
//         },
//         setTotalUsersCount: (totalCount) =>{
//            let action = setTotalCountUsersActionCreator(totalCount);
//             dispatch(action);
//         },
//         toggleIsFetching: (fetchingState) => {
//            let action = setFetchingStateActionCreator(fetchingState);
//             dispatch(action);
//         }
//     }
//
// }

const ConnectUsersContainer = connect(mapStateToProps,{
                                                        follow,
                                                        unFollow,
                                                        setUsers,
                                                        setCurrentPage,
                                                        setTotalUsersCount,
                                                        toggleIsFetching
                                                        }
)(UsersContainer);

export default ConnectUsersContainer;