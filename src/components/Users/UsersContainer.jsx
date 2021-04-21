import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, unFollow, toggleFollowingButton, getUsers, setUnfollow, setFollow} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     alert('new object created')

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.usersInPage)
    }

    pageChangeEvent = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.usersInPage)
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
            setOfFollowingInProgress = {this.props.setOfFollowingInProgress}
            setUnfollow = {this.props.setUnfollow}
            setFollow =  {this.props.setFollow}
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
        isFetching: state.usersPage.isFetching,
        setOfFollowingInProgress: state.usersPage.setOfFollowingInProgress
    }
}

const ConnectUsersContainer = connect(mapStateToProps,
    {getUsers,setUnfollow,setFollow})(UsersContainer);

export default ConnectUsersContainer;