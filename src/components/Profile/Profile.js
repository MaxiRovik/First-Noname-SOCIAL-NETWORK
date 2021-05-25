import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ConnectMyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profile = {props.profile}
                         isOwner = {props.isOwner}
                         status = {props.status}
                         updateStatus = {props.updateStatus}
                         changeProfileData = {props.changeProfileData}
                         savePhoto = {props.savePhoto}/>
            <ConnectMyPostsContainer />
        </div>
    )
};
export default Profile;