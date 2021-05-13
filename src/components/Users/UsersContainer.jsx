import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, unFollow, toggleFollowingButton, getUsers, setUnfollow, setFollow} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "redux/src/compose";
import {
    getAllUsersData, getCurrentPage, getFollowingInProgress, getStateOfIsFetching, getTotalUsersCount,
    getUsersSumInPage, pushFollowingInProgress
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, usersInPage} = this.props;
        this.props.getUsers(currentPage,usersInPage)
    }

    pageChangeEvent = (pageNumber) => {
        const {usersInPage} = this.props;
        this.props.getUsers(pageNumber,usersInPage)
    };

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
        users: getAllUsersData(state) ,
        usersInPage: getUsersSumInPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getStateOfIsFetching(state),
        setOfFollowingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {getUsers,setUnfollow,setFollow}),
    /*withAuthRedirect*/)(UsersContainer)
