import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ConnectMyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {
    return (
        <div className={classes.profileWrapper}>
            <div> {props.a}</div>
            <ProfileInfo profile = {props.profile} />
            <ConnectMyPostsContainer />
        </div>
    )

};
export default Profile;