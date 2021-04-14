import React from 'react';
import userPhoto from '../../assets/img/user.png';
import classes from '../Users/Users.module.css';
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.usersInPage);

    let pages = [];

    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.usersBlock}>
        <div>
            {pages.map((p) => {
                return (
                    <button className={props.currentPage === p && classes.selectedPage} onClick={() => {
                        props.pageChangeEvent(p)
                    }}>{p}</button>
                )
            })}

        </div>
        {props.users.map(e => (
            <div key={e.id} className={classes.usersContainer}>
                <div>
                    <div>
                        <NavLink to = {'/profile/' + e.id}>
                             <img className={classes.img} src={e.photos.small != null ? e.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {e.followed
                            ? <button onClick={() => {
                                props.unFollow(e.id)
                            }} className={classes.buttonFollowed}>
                                Follow
                            </button>
                            : <button onClick={() => {
                                props.follow(e.id)
                            }} className={classes.buttonUnfollowed}>
                                Unfollow
                            </button>}
                    </div>
                </div>
                <div className={classes.usersInfo}>
                    <div className={classes.usersNameAndStatus}>
                        <div className={classes.name}>
                            {e.name}
                        </div>
                        <div>
                            {e.status}
                        </div>

                    </div>
                    <div>
                        <div>
                            {"e.location.city"}
                        </div>
                        <div>
                            {"e.location.country"}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
}

export default Users;