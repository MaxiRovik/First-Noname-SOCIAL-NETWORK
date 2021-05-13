import React from 'react';
import classes from '../Users/Users.module.css';
import Pagination from "../common/Paginator/Pagination";
import User from "./User";


const Users = ({currentPage,usersInPage,totalUsersCount, pageChangeEvent, users, ...props}) => {
    return <div className={classes.usersBlock}>

        <Pagination totalItemsCount ={totalUsersCount}
                    usersInPage = {usersInPage}
                    currentPage ={currentPage}
                    pageChangeEvent ={pageChangeEvent}/>

        {users.map(e => (
            <div  className={classes.usersContainer}>
                <User key={e.id}
                      user = {e}
                      setOfFollowingInProgress ={props.setOfFollowingInProgress}
                      setUnfollow = {props.setUnfollow}
                      setFollow = {props.setFollow}/>
            </div>
        ))}
    </div>
};

export default Users;