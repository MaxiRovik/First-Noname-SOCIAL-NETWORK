import React from 'react';
import userPhoto from '../../assets/img/user.png';
import classes from '../Users/Users.module.css';
import {NavLink} from "react-router-dom";



const User = ({user, setOfFollowingInProgress, setUnfollow, setFollow}) => {
    return <div className={classes.usersBlock}>
            <div  className={classes.usersContainer}>
                <div>

                    <div>
                        <NavLink to = {'/profile/' + user.id}>
                             <img className={classes.img} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>


                    <div>
                        {user.followed
                            ? <button  disabled = {setOfFollowingInProgress.some(id =>id === user.id)}
                                       onClick={() => {setUnfollow(user.id)}}
                                       className={classes.buttonFollowed}>
                                Follow
                            </button>

                            : <button   disabled ={setOfFollowingInProgress.some(id =>id === user.id)}
                                        onClick={() => {setFollow(user.id)}}
                                        className={classes.buttonUnfollowed}>
                                unFollow
                            </button>}
                    </div>

                </div>
                <div className={classes.usersInfo}>
                    <div className={classes.usersNameAndStatus}>
                        <div className={classes.name}>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
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
};

export default User;