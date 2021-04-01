import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const navBar = (props) => {
    let navBarFriends = props.state.dialogs.map(friend => {
        return(
            <div className={classes.friends}>

                <div className ={classes.wrapperImg}>
                    <div>
                        {friend.name}
                    </div>
                    <img className={classes.img}  src={friend.picture} alt='#'/>
                </div>
             </div>
             )
                 });

    return (
        <div className={classes.navBar}>

            <nav className = {classes.nav}>

                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to = "/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to = "/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to = "/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to = "/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to = "/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>

          </nav>

            <div className={classes.sidebarBlock}>
                <div className={classes.friendsShowHolder}>
                    {navBarFriends}
                </div>

             </div>
        </div>
)
}
export default navBar;